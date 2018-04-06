module ParamsWhitelist
  extend ActiveSupport::Concern

  def user_params
    params.require(:user)
      .permit(
        :first_name,
        :last_name,
        :trade,
        :contactable,
        :job_position
      )
  end

  def place_params
    params.require(:place)
      .permit(
        :google_id,
        :name,
        :vicinity,
        :category
      )
  end

  def place_review_params
    params.require(:place_review)
      .permit(
        :place,
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
        :dollars_lost
      )
  end
end
