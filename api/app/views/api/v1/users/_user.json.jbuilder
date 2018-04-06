json.extract! user,
              :id,
              :first_name,
              :last_name,
              :email,
              :provider,
              :trade,
              :strip_token,
              :contactable,
              :place_id,
              :job_position
json.active_bids do
  json.array! user.place_bids.map { |b| b.place_id }
end
