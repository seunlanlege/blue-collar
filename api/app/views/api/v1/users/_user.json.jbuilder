json.extract! user,
              :id,
              :first_name,
              :last_name,
              :email,
              :trade,
              :contactable,
              :place_id,
              :job_position,
              :referral_code,
              :place_reviews,
              :place
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

json.places do
  # @places.try(:split, ",").try(:each) do |place|
  if @places
      @places.each do |place|
        json.set! place.id do
          json.partial! "api/v1/users/place", place: place
        end
      end
  end

end
