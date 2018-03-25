module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!
      before_action :set_user, only: [:show, :update, :destroy]

      # PATCH/PUT /users/1
      # PATCH/PUT /users/1.json
      def update
        company = Company.find_or_create_by(company_params)
        @user.company = company
        @user.assign_attributes(user_params)

        if @user.save
          render json: {data: @user}, status: :ok
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

      def company_params
        params[:user].require(:company).permit(:vicinity, :name, :place_id)
      end
    end
  end
end
