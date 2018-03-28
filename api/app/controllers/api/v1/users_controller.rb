module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!
      before_action :set_user, only: [:show, :update, :destroy]

      # PATCH/PUT /users/1
      # PATCH/PUT /users/1.json
      def update
        place = Place.find_or_create_by(place_params)
        @user.place = place
        @user.assign_attributes(user_params)

        if @user.save
          render :show, status: :ok
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      private

      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:first_name, :last_name, :trade, :contactable, :job_position)
      end

      def place_params
        params[:user].require(:place).permit(:vicinity, :name, :google_place_id, :category)
      end
    end
  end
end
