# 🩺 VaidyaHealth – Predicting Heart Failure Readmissions

**VaidyaHealth** is a machine learning-powered application developed during the Veersa Hackathon for Batch 2026. It predicts whether a heart failure patient is at risk of being readmitted within 30 days of discharge. The goal is to help healthcare providers take timely preventive actions, reduce hospital readmission rates, and improve patient outcomes.

---

## 🚀 Live Demo
🔗 [Access the deployed app here](https://your-deployment-url.com)

---

## 📌 Problem Statement

Heart failure is a chronic condition with high readmission rates. The aim of this project is to use AI/ML to **predict 30-day readmissions** using patient data such as vitals, demographics, and clinical features.

---
## Dataset Used

A subset of 8 tables is shared with us (via OneDrive). These tables are from MIMIC-III, a public ICU dataset.
We're expected to choose the relevant tables that will help us build a predictive model.

📚 Official MIMIC-III Table Documentation:

🔗 https://mimic.mit.edu/docs/iii/tables/

---

## 🎯 Key Features

- 📊 Accepts patient data as input through a user-friendly interface
- 🤖 Predicts readmission risk using ML models (XGBoost, Logistic Regression, etc.)
- ⚖️ Handles severely imbalanced data using SMOTE,SMOTEENN, threshold tuning, and weighted loss
- 🧠 Explainable AI: SHAP values show top risk-contributing features
- 📉 Evaluates model using Precision-Recall AUC, F1-score, and more
- 💡 Fast and intuitive interface built for clinicians and healthcare admins

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Python, Django
- **ML/AI**: EDA, Data Extraction, Feature Engineering, Preprocessing, Sampling Techniques, ML Algorithms
- **Model Deployment**: Vercel
- **Version Control**: Git + GitHub

