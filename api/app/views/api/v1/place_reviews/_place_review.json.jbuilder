json.extract! place_review,
              :id,
              :reviewer_id,
              :point_of_contact_type,
              :comments,
              :star_bid_process,
              :star_change_orders_accepted,
              :star_time_respected,
              :star_job_completed,
              :star_payments_satifaction,
              :star_work_with_again,
              :star_overall,
              :bought_materials,
              :other_party_involved,
              :dollars_lost,
              :created_at,
              :updated_at

json.place place_review.place, partial: "api/v1/place_reviews/place", as: :place
