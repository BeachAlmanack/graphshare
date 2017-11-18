class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method: current_user

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= user.find_by(session_token: session[:session_token])
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
