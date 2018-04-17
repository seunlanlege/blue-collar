class AddStarOverallToPlaceReviews < ActiveRecord::Migration[5.1]
  def change
      add_column :place_reviews, :star_overall, :integer, null: false
  end
end
