require 'test_helper'

class RewardTransactionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reward_transaction = reward_transactions(:one)
  end

  test "should get index" do
    get reward_transactions_url, as: :json
    assert_response :success
  end

  test "should create reward_transaction" do
    assert_difference('RewardTransaction.count') do
      post reward_transactions_url, params: { reward_transaction: { api/v1: @reward_transaction.api/v1 } }, as: :json
    end

    assert_response 201
  end

  test "should show reward_transaction" do
    get reward_transaction_url(@reward_transaction), as: :json
    assert_response :success
  end

  test "should update reward_transaction" do
    patch reward_transaction_url(@reward_transaction), params: { reward_transaction: { api/v1: @reward_transaction.api/v1 } }, as: :json
    assert_response 200
  end

  test "should destroy reward_transaction" do
    assert_difference('RewardTransaction.count', -1) do
      delete reward_transaction_url(@reward_transaction), as: :json
    end

    assert_response 204
  end
end
