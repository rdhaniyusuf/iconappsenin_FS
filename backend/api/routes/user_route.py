from flask import Blueprint
from api.controllers.user_controller import create_user, login_user

user_bp = Blueprint('user', __name__)


# admin Route
user_bp.route('/admin/create-user', methods=['POST'])(create_user)

# user  Route
user_bp.route('/user/login', methods=['POST'])(login_user)