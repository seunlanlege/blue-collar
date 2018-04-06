json.extract! place,
              :id,
              :google_id,
              :name,
              :vicinity,
              :category,
              :created_at,
              :updated_at
json.reviews do
    json.array! place.place_reviews, partial: "api/v1/places/place_review", as: :place_review
end
