json.reviews do
  json.array! @place_reviews, partial: "api/v1/place_reviews/place_review", as: :place_review
end

json.places({}) # defaults to empty dictionary.
json.places do
  @places.each do |place|
    json.set! place.id do
      json.partial! "api/v1/reviews/place", place: place
    end
  end
end

json.users({})
json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! "api/v1/reviews/user", user: user
        end
    end
end
