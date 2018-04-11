class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ParamsWhitelist
  include FetchModels

  protect_from_forgery with: :null_session
end
