# **AI Enabled FinTech B2B Invoice Management System**

## **Description**
This project aims to build an AI-enabled FinTech B2B Invoice Management System that integrates Machine Learning, React, and JDBC Servlets. The system is designed to assist the Account Receivables department of businesses in managing and predicting invoice payments.

## **Problem Statement**
In the real world, businesses often struggle with delayed payments beyond the stipulated payment terms. The Account Receivables department is responsible for tracking and collecting payments for past-due invoices, ensuring cash inflow, and maintaining the company's financial health. This project addresses these challenges by:

- Predicting the payment date of an invoice using a Machine Learning model.
- Building a full-stack Invoice Management Application to manage and track invoices.

## **Technologies Used**

### **Machine Learning**
- **Pandas**
- **Numpy**
- **Matplotlib**
- **Scikit-learn**

### **Frontend**
- **React JS**
- **HTML**
- **CSS**

### **Backend**
- **Java**
- **Servlets**
- **JDBC**
- **JSP**
- **MySQL**

### **Tools**
- **Eclipse IDE**
- **TomCat Server**
- **Postman API Testing Tools**
- **SQL Yog**
- **Jupyter Notebook**

## **High-Level Requirements**
1. **Data Loading into Database:**
   - Parse, process, and load invoice datasets into the database.
   
2. **UI Representation:**
   - Build a responsive UI to display, search, and paginate invoice data.
   - Support editing, adding, deleting rows, and advanced search functionalities.
   
3. **AI Integration:**
   - Predict payment dates for one or more invoices with a button in the UI.
   - Persist the predicted payment dates across sessions.

## **Implementation**

### **Machine Learning**
- **Data Collection:** Collected dataset containing past payment activities.
- **Data Pre-processing:** Cleaned, normalized, and standardized the dataset.
- **Exploratory Data Analysis (EDA):** Performed EDA to identify vital features using Python libraries like Matplotlib and Seaborn.
- **Model Training:** Implemented XGBoost Regressor to predict payment dates.
- **Prediction Deployment:** Deployed the model using Flask for integration with the web application.

### **UI & Database**
- **Backend:**
  - Parsed and processed the dataset in Java, loading it into SQL.
  - Implemented functionalities like ADD, EDIT, DELETE in Java and integrated them with the UI.
  - Created a servlet to handle requests and responses between the web client and backend.
  
- **Frontend:**
  - Developed a responsive UI using ReactJS to display invoice data.
  - Integrated UI functionalities with backend operations and the Machine Learning model to predict payment dates.
