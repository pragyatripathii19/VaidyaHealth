# 🩺 VaidyaHealth – Predicting 30-Day Heart Failure Readmissions

**VaidyaHealth** is an AI-powered web application developed by our team **“VaidyaCoders”** during the **Veersa Hackathon 2025 (Batch 2026)**. It predicts the likelihood of a **heart failure patient being readmitted within 30 days** of hospital discharge.

The goal: assist healthcare professionals in making **early, informed interventions** to reduce preventable readmissions and improve patient care outcomes.

---

## 🚀 Live Demo

👉 [Try the deployed app on Vercel](https://vaidya-health-mlwg.vercel.app/)

---

## 📌 Problem Statement

Heart failure is a chronic, high-risk condition. Despite treatment, many patients are readmitted shortly after discharge. These early readmissions:

* 📈 Increase risk of death and complications
* 💸 Impose heavy financial burdens on patients and families
* 🏥 Add strain to already overwhelmed hospital systems

### 🎯 Objective

Develop a machine learning solution that can:

> **Predict whether a patient will be readmitted within 30 days of discharge.**

This was formulated as a **binary classification** problem:

* `1` → Patient *is* readmitted within 30 days
* `0` → Patient *is not* readmitted within 30 days

---

## 🗃️ Dataset: MIMIC-III Clinical Database

We worked with a subset of **8 interlinked tables** from the publicly available **MIMIC-III** ICU dataset.

These tables were merged and cleaned to generate patient-level records with features such as admission type, discharge location, length of stay, comorbidities, and more.

📄 [Official MIMIC-III Documentation](https://mimic.mit.edu/docs/iii/tables/)

---

## 🔁 End-to-End ML Workflow

Our approach followed a structured ML pipeline tailored for imbalanced medical data.
![ML Workflow](https://github.com/user-attachments/assets/71c9c13d-b8c0-4702-bc5f-677ed78dd872)

Key steps included:

* Literature review to benchmark features and approaches
* Data extraction and merging from MIMIC-III
* Exploratory Data Analysis (EDA)
* Cleaning, encoding, normalization, and preprocessing
* Feature engineering & domain-driven selection
* Model building with imbalance-handling techniques
* Evaluation using clinically meaningful metrics (PR-AUC, Recall)

---

## 💡 Key Features

* 🧾 Clean, **clinician-friendly UI** for patient data input
* 🤖 Predictive backend using models like **XGBoost, Logistic Regression, EasyEnsemble**
* ⚖️ **Class imbalance handled** with SMOTE, SMOTEENN, threshold tuning, and weighted losses
* 🔍 **Explainable AI**: SHAP values show top contributing features per prediction
* 📈 Model evaluation driven by **recall, PR-AUC, and F1-score** — not just accuracy
* ⚙️ Built with real-world clinical deployment in mind

---

## 🛠️ Tech Stack

| Layer               | Tools Used                                |
| ------------------- | ----------------------------------------- |
| **Frontend**        | ReactJS, Tailwind CSS                     |
| **Backend**         | Django, Python                            |
| **ML/AI**           | XGBoost, Logistic Regression, SMOTE, SHAP |
| **Deployment**      | Vercel                                    |
| **Version Control** | Git + GitHub                              |

---

## 📊 Model Performance Snapshot

<img width="425" alt="Model Metrics" src="https://github.com/user-attachments/assets/f3732117-2003-4729-b9f0-942ac9e50b8a" />

Highlights:

* **XGBoost + Threshold Tuning (0.2):** Recall \~0.85
* **Logistic Regression + Threshold 0.1:** Recall \~1.0
* **EasyEnsembleClassifier:** Balanced results (Recall: 0.66, PR-AUC: 0.12)

📌 Precision-Recall trade-offs were a core consideration given the healthcare context.

---

## 📝 Read More – Full Blog on Medium

📖 Dive deeper into our approach, experiments, and lessons learned:

🔗 [Read the Blog → “Predicting 30-Day Readmissions in Heart Failure Patients: Our Journey at Veersa Hackathon 2025”](https://medium.com/@pragyatripathii19/predicting-30-day-readmissions-in-heart-failure-patients-our-journey-at-veersa-hackathon-2025-57ab3d9453d3)

---

## 📌 Note on Limitations

Our model favors **high recall (\~91%)** to minimize the risk of missing true readmissions, at the cost of **lower precision (\~12–15%)**. This trade-off was intentional:

> In critical care, **false negatives** (missed readmissions) are riskier than **false positives** (extra monitoring). The model is designed to be a supportive tool, not a definitive diagnosis.


