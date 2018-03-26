require 'test_helper'

class PlaceReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @place_review = place_reviews(:one)
  end

  test "should get index" do
    get place_reviews_url, as: :json
    assert_response :success
  end

  test "should create place_review" do
    assert_difference('PlaceReview.count') do
      post place_reviews_url, params: { place_review: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show place_review" do
    get place_review_url(@place_review), as: :json
    assert_response :success
  end

  test "should update place_review" do
    patch place_review_url(@place_review), params: { place_review: {  } }, as: :json
    assert_response 200
  end

  test "should destroy place_review" do
    assert_difference('PlaceReview.count', -1) do
      delete place_review_url(@place_review), as: :json
    end

    assert_response 204
  end
end
