require 'test_helper'

class VenueReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @venue_review = venue_reviews(:one)
  end

  test "should get index" do
    get venue_reviews_url, as: :json
    assert_response :success
  end

  test "should create venue_review" do
    assert_difference('VenueReview.count') do
      post venue_reviews_url, params: { venue_review: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show venue_review" do
    get venue_review_url(@venue_review), as: :json
    assert_response :success
  end

  test "should update venue_review" do
    patch venue_review_url(@venue_review), params: { venue_review: {  } }, as: :json
    assert_response 200
  end

  test "should destroy venue_review" do
    assert_difference('VenueReview.count', -1) do
      delete venue_review_url(@venue_review), as: :json
    end

    assert_response 204
  end
end
