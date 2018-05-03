module Api
  module V1
    class FacebookUsersController < ApplicationController
      skip_before_action :verify_authenticity_token

      def create
        @user = User.where({
          uid: facebook_user_params[:uid],
          provider: facebook_user_params[:provider],
        }).first_or_initialize

        @user.email = facebook_user_params[:email]

        client_id, token, expiry = @user.create_token

        bypass_sign_in(@user)

        @user.skip_confirmation!

        @user.save!

        @auth_params = {
          auth_token: token,
          client_id: client_id,
          uid:       @user.uid,
          expiry:    expiry,
        }

        response.headers["access-token"] = token
        response.headers["token-type"] = "Bearer"
        response.headers["client"] = client_id
        response.headers["expiry"] = token
        response.headers["uid"] = @user.uid
        response.headers["auth_token"] = token

        render(json: @user.as_json)
      end
    end
  end
end
