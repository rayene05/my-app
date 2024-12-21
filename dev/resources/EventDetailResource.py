from flask_restful import Resource
from flask import request, jsonify, session
from Models import Event
from app import db
class EventDetailResource(Resource):
     def delete(self, event_id): 
        event = Event.query.get_or_404(event_id)
        db.session.delete(event) 
        db.session.commit()
        return '', 204