json.extract! user,
              :id,
              :first_name,
              :last_name,
              :email,
              :provider,
              :trade,
              :contactable,
              :place_id,
              :job_position,
              :referral_code
json.active_bids do
  # uniq filter here is a hack! Should use a unique scope in PlaceBid model.
  json.array! user.place_bids.map { |b| b.place.google_id }.uniq
end

json.subscription({}) # defaults to empty dictionary.
json.subscription user.fetch_subscription_details # YOLO, cleanup later

# YOLO, cleanup later
json.rewards do
  json.lifetime_points RewardTransaction.lifetime_points(user.reward_transactions)
  json.available_points RewardTransaction.available_points(user.reward_transactions)
end

# Even worse YOLO
@place_reviews = User.place_reviews
@places = Place.where(id: @place_reviews.map(&:place_id))
json.reviews do
  json.partial! "api/v1/reivews/index"
end