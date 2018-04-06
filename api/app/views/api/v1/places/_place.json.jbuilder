json.extract! place,
              :id,
              :google_id,
              :name,
              :vicinity,
              :category,
              :created_at,
              :updated_at
json.active_bids_count @active_bids_count
json.reviews do
  json.array! place.reviews, partial: "api/v1/place_reviews/place_review", as: :place_review
end
