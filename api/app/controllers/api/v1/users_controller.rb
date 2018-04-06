module Api
  module V1
    class UsersController < ApplicationController
      include ParamsWhitelist

      before_action :authenticate_user!
      before_action :set_user, only: [:show, :update]

      def show
        @user.place_bids.includes(:active).preload(:place)

        if @user
          render :show, status: :ok
        else
          render nothing: true, status: 404
        end
      end

      def update
        @user.place = Place.find_or_create_by(place_params)
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
    end
  end
end
