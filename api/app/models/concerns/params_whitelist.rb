module ParamsWhitelist
  extend ActiveSupport::Concern

  def place_params
    params.require(:place).permit(:google_place_id, :name, :vicinity, :category)
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :trade, :contactable, :job_position)
  end
end
