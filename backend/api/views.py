from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# from joblib import load
# model = load("model.pkl")  # Load your model here

@csrf_exempt
def predict(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        input_value = data.get("input")

        # prediction = model.predict([input_value])[0]
        prediction = f"Simulated prediction for input: {input_value}"

        return JsonResponse({"prediction": prediction})
    return JsonResponse({"error": "Invalid request"}, status=400)
