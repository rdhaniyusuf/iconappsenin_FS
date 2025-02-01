from flask import Flask
from api.routes.user_route import user_bp

app = Flask(__name__)

app.register_blueprint(user_bp)

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/user')
def user():
    return "This user"

if __name__ == '__main__':
    app.run(debug=True)