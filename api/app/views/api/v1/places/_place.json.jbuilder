json.extract! place,
              :id,
              :google_id,
              :name,
              :formatted_address,
              :state,
              :category,
              :created_at,
              :updated_at
json.active_bids_count @active_bids_count
json.group_bids @group_bids

json.reviews do
  json.array! place.reviews, partial: "api/v1/place_reviews/place_review", as: :place_review
end
