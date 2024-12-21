from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
db=SQLAlchemy()
def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tabelname__="users"
    id =db.Column(db.String(32),primary_key=True,unique=True,default=get_uuid)
    email=db.Column(db.String(345),unique=True)
    password=db.Column(db.Text,nullable=False)
    address=db.Column(db.String(345))
    contact_number=db.Column(db.String(345),unique=True)
    first_name=db.Column(db.String(345))
    second_name=db.Column(db.String(345))
    token=db.Column(db.String(32))
    engines = db.relationship('Engine', backref='user', lazy=True)
    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name":self.first_name,
            "second_name":self.second_name,
            "contact_number": self.contact_number,
            "address": self.address,
           
        }




class Engine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rpm = db.Column(db.Float, nullable=False)
    lub_oil_pressure = db.Column(db.Float, nullable=False)
    coolant_pressure = db.Column(db.Float, nullable=False)
    lub_oil_temp = db.Column(db.Float, nullable=False)
    coolant_temp = db.Column(db.Float, nullable=False)
    energy = db.Column(db.Float, nullable=False)
    tire = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "rpm": self.rpm,
            "lub_oil_pressure": self.lub_oil_pressure,
            "coolant_pressure": self.coolant_pressure,
            "lub_oil_temp": self.lub_oil_temp,
            "coolant_temp": self.coolant_temp,
            "energy": self.energy,
            "tire": self.tire
        }

    def __repr__(self):
        return f'<Engine {self.id}>'

class Event(db.Model):
     id = db.Column(db.Integer, primary_key=True) 
     title = db.Column(db.String(100), nullable=False) 
     start = db.Column(db.String(100), nullable=False) 
     end = db.Column(db.String(100), nullable=True) 
     allDay = db.Column(db.Boolean, nullable=False) 
     def to_dict(self): 
         return { 'id': self.id, 'title': self.title, 'start': self.start, 'end': self.end, 'allDay': self.allDay }
    