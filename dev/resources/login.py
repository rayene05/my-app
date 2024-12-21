from flask_restful import Resource
from flask import request, jsonify, session
from Models import User
from app import bcrypt
from app import db

from secrets import token_urlsafe

class LoginResource(Resource):
  def post(self):
    email = request.json["email"]
    password = request.json["password"]
    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.check_password_hash(user.password, password):
      return {"error": "Unauthorized"}, 401

    # Generate a secure session token
    session_token = token_urlsafe(32)  # Generate a 32-character token

    # Store the token in the session
    session["session_token"] = session_token
    user.token=session_token
    db.session.commit()
    # Update the response to include the token
    return ({
      "email": email,
    
    }, 200)
