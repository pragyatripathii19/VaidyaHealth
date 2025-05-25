import unittest
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import average_precision_score
from imblearn.ensemble import EasyEnsembleClassifier

class TestEasyEnsemblePipeline(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Load data
        cls.df = pd.read_csv("hf_model_data.csv")

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
        target_column = 'readmit_30_days'
        cls.df_selected = cls.df[top_features + [target_column]]

        cls.X = cls.df_selected[top_features]
        cls.y = cls.df_selected[target_column]

        # Train-test split
        cls.X_train, cls.X_test, cls.y_train, cls.y_test = train_test_split(
            cls.X, cls.y, test_size=0.2, random_state=42, stratify=cls.y
        )

        # Initialize and train model
        cls.model = EasyEnsembleClassifier(n_estimators=50, random_state=42)
        cls.model.fit(cls.X_train, cls.y_train)

    def test_feature_shape(self):
        """Ensure only 20 features are used and there are no missing values."""
        self.assertEqual(self.X.shape[1], 20, "Incorrect number of features.")
        self.assertFalse(self.X.isnull().any().any(), "NaN values found in features.")
        self.assertFalse(self.y.isnull().any(), "NaN values found in target.")

    def test_class_distribution(self):
        """Check for class imbalance info (not fail, just print)."""
        unique, counts = np.unique(self.y, return_counts=True)
        print(f"Class distribution: {dict(zip(unique, counts))}")
        self.assertGreaterEqual(len(unique), 2, "Only one class found.")

    def test_prediction_shape(self):
        """Check prediction length matches test set size."""
        preds = self.model.predict_proba(self.X_test)[:, 1]
        self.assertEqual(len(preds), len(self.X_test), "Prediction length mismatch.")

if __name__ == '__main__':
    unittest.main()
