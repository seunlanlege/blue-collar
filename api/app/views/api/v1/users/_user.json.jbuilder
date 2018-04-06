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
  json.array! user.place_bids.map { |b| b.place.google_id }
end
