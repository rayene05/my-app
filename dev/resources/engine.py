from flask_restful import Resource
from flask import request, jsonify, session
from Models import db, Engine,User
from app import bcrypt

class EngineResource(Resource):
    def get(self):
        token = session.get("session_token")
        user=User.query.filter_by(token=token).first()
        if not user:
            return {"error": "Unauthorized"}, 401

        engine = Engine.query.filter_by(user_id=user.id).first()
        data=jsonify(engine.to_dict())
        return data
    
        


      