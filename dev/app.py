from flask import Flask
from flask_restful import Api
from flask_session import Session
from flask_cors import CORS
from config import ApplicationConfig
from Models import db
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)
    CORS(app, supports_credentials=True)
    db.init_app(app)
    bcrypt.init_app(app)
    api = Api(app)
    server_session = Session(app)

    with app.app_context():
        db.create_all()

    from resources.user import UserResource
    from resources.login import LoginResource
    from resources.engine import EngineResource 
    from resources.EventResource import EventResource 
    from resources.EventDetailResource import EventDetailResource
    from resources.IA import myModel


    api.add_resource(UserResource, '/user')
    api.add_resource(LoginResource, '/login')
    api.add_resource(EngineResource, '/enginedata')
    api.add_resource(EventResource, '/api/events') 
    api.add_resource(EventDetailResource, '/api/events/<int:event_id>')
    api.add_resource(myModel, '/IA')


    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
