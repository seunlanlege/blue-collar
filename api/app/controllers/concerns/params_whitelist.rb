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
        :formatted_address,
        :category,
        :latitude,
        :longitude,
        :state
      )
  end

  def place_review_params
    params.require(:place_review)
      .permit(
        :poc_name,
        :poc_type,
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

  def subscription_params
    params.require(:subscription).permit(:token)
  end

  def rewards_params
    params.require(:rewards)
      .permit(
        :tx_type,
        :redeem_type,
        :amount
      )
  end
end
