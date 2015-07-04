class ApplicationController < ActionController::Base
  before_action :store_location

  private

  def sign_in_required
    redirect_to new_user_session_url unless user_signed_in?
  end

  def store_location
    return unless request.get? 
    if (request.path != "/users/sign_in" &&
        request.path != "/users/sign_up" &&
        request.path != "/users/password/new" &&
        request.path != "/users/sign_out" &&
        !request.xhr?)
      session[:previous_url] = request.fullpath 
    end
  end

  def after_sign_in_path_for(resource)
    '/washiwashi'
  end
  
  def after_sign_out_path_for(resource)
    root_path
  end
end
