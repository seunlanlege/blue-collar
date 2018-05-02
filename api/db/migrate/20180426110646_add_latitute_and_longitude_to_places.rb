class AddLatituteAndLongitudeToPlaces < ActiveRecord::Migration[5.1]
  def change
      add_column :places, :latitude, :string, null: false
      add_column :places, :longitude, :string, null: false
      add_column :places, :state, :string, null: false
  end
end
