module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!
      before_action :set_user, only: [:show, :update]
      before_action :fetch_or_create_place, only: [:update]

      def show
        @user.place_bids.includes(:active).preload(:place)
        @places = Place.where(id: @user.place_reviews.map(&:place_id))
        if @user
          render :show, status: :ok
        else
          render nothing: true, status: 404
        end
      end

      def update
        if current_user.id != @user.id
          return render nothing: true, status: 401
        end

        @user.place = @place
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
