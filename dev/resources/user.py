from flask_restful import Resource
from flask import request, session
from Models import db, User
from app import bcrypt

class UserResource(Resource):
    def get(self):
        token = session.get("session_token")
        user = User.query.filter_by(token=token).first()
        if not user:
            return {"error": "Unauthorized"}, 401
        else:
            data = user.to_dict()
            print(data)
            return data, 200

    def post(self):
        
        email = request.json["email"]
        password = request.json["password"]
        contact_number = request.json["contact_number"]
        address = request.json["address"]
        first_name = request.json["first_name"]
        second_name = request.json["second_name"]
        user_exist = User.query.filter_by(email=email).first()
        if user_exist:
            return {"error": "User already exists"}, 409
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(email=email, password=hashed_password, address=address, contact_number=contact_number, first_name=first_name, second_name=second_name)
        db.session.add(new_user)
        db.session.commit()
        
        return {"email": email, "id": new_user.id}

    def put(self):
        token = session.get("session_token")
        user = User.query.filter_by(token=token).first()
        if not user:
            return {"error": "Unauthorized"}, 401

        data = request.json
        if not data:
            return {"error": "No data provided"}, 400

        if "email" in data:
            user.email = data["email"]
        if "address" in data:
            user.address = data["address"]
        if "contact_number" in data:
            user.contact_number = data["contact_number"]
        if "first_name" in data:
            user.first_name = data["first_name"]
        if "second_name" in data:
            user.second_name = data["second_name"]

        db.session.commit()
        return {"message": "User updated successfully"}, 200
