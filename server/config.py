from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.json.compact = False

metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)
bcrypt = Bcrypt(app)

migrate = Migrate(app, db)

db.init_app(app)


CORS(app, supports_credentials=True)