class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ParamsWhitelist
  include FetchModels

  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
end
