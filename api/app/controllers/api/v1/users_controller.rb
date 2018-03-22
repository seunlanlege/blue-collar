module Api
    module V1
        class UsersController < ApplicationController
            before_action :authenticate_user!
            before_action :set_user, only: [:show, :update, :destroy]

            # PATCH/PUT /users/1
            # PATCH/PUT /users/1.json
            def update
              company_params = { :place_id => user_params['place_id'], :name => user_params['company_name'], :vicinity => user_params['vicinity'] }
              @company = Company.new(company_params)

              if @company.save
                  company_user_params = { :company_id => @company[:id], :user_id => params[:id], :user_type => user_params['user_type'] }
                  @company_user = CompanyUser.new(company_user_params)
              else
                render json: @company.errors, status: :unprocessable_entity
              end

              user_params.delete(:place_id)
              user_params.delete(:vicinity)
              if @user.update(user_params)
                render json: @user, status: :ok
              else
                render json: @user.errors, status: :unprocessable_entity
              end
            end

            private
              # Use callbacks to share common setup or constraints between actions.
              def set_user
                @user = User.find(params[:id])
              end

              # Never trust parameters from the scary internet, only allow the white list through.
              def user_params
                params.require(:user).permit(:first_name, :last_name, :trade, :contactable)
              end
        end
    end
end
