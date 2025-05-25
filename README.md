# 🩺 VaidyaHealth – Predicting Heart Failure Readmissions

**VaidyaHealth** is a machine learning-powered application developed during the **Veersa Hackathon (Batch 2026)**. It predicts whether a heart failure patient is at risk of being readmitted within **30 days of discharge**.

The goal is to help healthcare providers take **timely preventive actions**, reduce **hospital readmission rates**, and improve **patient outcomes**.

---

## 🚀 Live Demo

🔗 [Access the deployed app here](https://your-deployment-url.com)

---

## 📌 Problem Statement

Heart failure is a serious condition that, if not managed properly, can lead to death. Even after treatment and discharge, many patients are readmitted within 30 days, which:

* ⚠️ Increases the risk of death (morbidity and mortality)
* 💸 Causes a financial burden on patients and families
* 🏥 Puts more pressure on already overloaded healthcare systems

### 🎯 Our Objective

Develop a **machine learning model** to:

> Predict whether a patient will be readmitted within 30 days of discharge after treatment for heart failure.

This is a **binary classification** problem:

* `1` → Patient is **readmitted** within 30 days
* `0` → Patient is **not readmitted**

---

## 🗃️ Dataset Used

We worked with a subset of **8 tables** from the **MIMIC-III** public ICU dataset, shared via OneDrive.

We're expected to extract and merge relevant features from these tables to build an effective predictive model.

📚 **Official MIMIC-III Table Documentation**:
🔗 [https://mimic.mit.edu/docs/iii/tables/](https://mimic.mit.edu/docs/iii/tables/)

---

## 🎯 Key Features

* 📊 Accepts patient data through a **user-friendly interface**
* 🤖 Predicts **30-day readmission risk** using ML models (XGBoost, Logistic Regression, etc.)
* ⚖️ Tackles **severe class imbalance** using SMOTE, SMOTEENN, threshold tuning, and weighted loss
* 🧠 **Explainable AI**: SHAP values highlight top risk-contributing features
* 📉 Evaluates models with **Precision-Recall AUC, F1-score**, and more
* 💡 **Fast and intuitive UI** built for clinicians and healthcare admins

---

## 🛠️ Tech Stack

* **Frontend**: ReactJS, Tailwind CSS
* **Backend**: Python, Django
* **ML/AI**: EDA, Feature Engineering, Preprocessing, Sampling Techniques, ML Algorithms
* **Model Deployment**: Vercel
* **Version Control**: Git + GitHub
