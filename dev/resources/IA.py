from flask_restful import Resource
from flask import request, jsonify, session
import pickle
import numpy as np
import pandas as pd
from app import db
# Load the model
with open(r"C:\\Users\\ezzed\Desktop\\ihm_project\\server\\dev\\IA_model\\model3.pkl", 'rb') as file:
    model = pickle.load(file)

# Load the scaler
with open(r"C:\\Users\\ezzed\Desktop\\ihm_project\\server\dev\\IA_model\\scaler.pkl", 'rb') as file:
    scaler = pickle.load(file)


class myModel(Resource):
    def post(self):
        data = request.get_json(force=True)
     
        features = np.array(data['features']).reshape(1, -1)
        print(features)
       
       
        # Convert features to DataFrame with column names
        feature_names = ['Engine rpm', 'Lub oil pressure', 'Fuel pressure', 'Coolant pressure',
       'lub oil temp', 'Coolant temp']
        features_df = pd.DataFrame(features, columns=feature_names)
        print("input",features_df)
        
        # Standardize the input features
        features_standardized = scaler.transform(features_df)
        features_status= pd.DataFrame(features_standardized, columns=feature_names)
        # Make prediction
        prediction = model.predict(features_status)
        return jsonify({'prediction': prediction.tolist()})
   
    
    

