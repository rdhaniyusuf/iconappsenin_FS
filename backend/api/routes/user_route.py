from flask import Blueprint
from api.controllers.user_controller import create_user, login_user
from api.controllers.dashboard.dashboard_controller import parse_data

user_bp = Blueprint('user', __name__)

dashboard_bp = Blueprint('dashboard', __name__) 


# admin Route
user_bp.route('/admin/create-user', methods=['POST'])(create_user)

# user  Route
user_bp.route('/user/login', methods=['POST'])(login_user)

# dashboard Route
dashboard_bp.route('/dashboard/all_absense', methods=['GET'])(parse_data)