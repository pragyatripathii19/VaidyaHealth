import joblib
import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os

# Load the trained model once when the server starts
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'easy_ensemble_model.joblib')
model = joblib.load(MODEL_PATH)

# Top 20 features expected in the input
top_features = [
    'RDW_BLOOD',
    'Chloride_BLOOD',
    'White_Blood_Cells_BLOOD',
    'Red_Blood_Cells_BLOOD',
    'num_diagnoses',
    'Cortisol_BLOOD',
    'Bicarbonate_BLOOD',
    'Hemoglobin_BLOOD',
    'MCH_BLOOD',
    'NTproBNP_BLOOD',
    'hematocrit',
    'Neutrophils_BLOOD',
    'platelet_count',
    'Troponin_I_BLOOD',
    'Creatinine_BLOOD',
    'chloride',
    'Asparate_Aminotransferase_AST__BLOOD',
    'Digoxin_BLOOD',
    'Urea_Nitrogen_BLOOD',
    'MCHC_BLOOD'
]

@csrf_exempt
def predict(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))

            # Extract features in the correct order
            input_data = []
            for feature in top_features:
                if feature not in data:
                    return JsonResponse({'error': f'Missing feature: {feature}'}, status=400)
                try:
                    input_data.append(float(data[feature]))
                except ValueError:
                    return JsonResponse({'error': f'Invalid value for feature: {feature}'}, status=400)

             # Convert input to DataFrame with feature names
            input_df = pd.DataFrame([input_data], columns=top_features)

            # Predict
            prediction = model.predict(input_df)[0]
            prediction_proba = model.predict_proba(input_df)[0]

            return JsonResponse({
                'prediction': int(prediction),
                'probability_class_0': round(float(prediction_proba[0]), 4),
                'probability_class_1': round(float(prediction_proba[1]), 4)
            })

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

    return JsonResponse({'error': 'Only POST method is allowed'}, status=405)