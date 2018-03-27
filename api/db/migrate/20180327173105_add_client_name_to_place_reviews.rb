class AddClientNameToPlaceReviews < ActiveRecord::Migration[5.1]
  def change
      add_column :place_reviews, :client_name, :string
  end
end
