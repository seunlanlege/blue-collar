module Api
  module V1
    class RewardTransactionsController < ApplicationController
      before_action :authenticate_user!
      before_action :set_reward_transaction, only: [:show, :update, :destroy]

      # GET /reward_transactions
      # GET /reward_transactions.json
      def index
        @reward_transactions = RewardTransaction.all
      end

      # GET /reward_transactions/1
      # GET /reward_transactions/1.json
      def show
      end

      # POST /reward_transactions
      # POST /reward_transactions.json
      def create
        @reward_transaction = RewardTransaction.new(reward_transaction_params)

        if @reward_transaction.save
          render :show, status: :created
        else
          render json: @reward_transaction.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /reward_transactions/1
      # PATCH/PUT /reward_transactions/1.json
      def update
        if @reward_transaction.update(reward_transaction_params)
          render :show, status: :ok
        else
          render json: @reward_transaction.errors, status: :unprocessable_entity
        end
      end

      # DELETE /reward_transactions/1
      # DELETE /reward_transactions/1.json
      def destroy
        render body: nil, status: :no_content
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_reward_transaction
        @reward_transaction = RewardTransaction.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def reward_transaction_params
        params.require(:reward_transaction).permit()
      end
    end
  end
end
