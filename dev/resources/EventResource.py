from flask_restful import Resource
from flask import request, jsonify, session
from Models import Event
from app import db

class EventResource(Resource):
     def get(self): 
        events = Event.query.all() 
        return jsonify([event.to_dict() for event in events])
     def post(self):
         data = request.get_json()
         new_event = Event( title=data['title'], start=data['start'], end=data.get('end'), allDay=data['allDay'] )
         print(new_event)
         db.session.add(new_event)
         db.session.commit() 
         return {"sucess": "event added "}, 201
