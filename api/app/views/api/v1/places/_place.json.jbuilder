json.extract! place,
              :id,
              :google_place_id,
              :name,
              :vicinity,
              :category,
              :created_at,
              :updated_at
json.reviews place.place_reviews, partial: "api/v1/places/place_review", as: :reviews
