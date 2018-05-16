class AddUnitIdToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :unit_id, :string

    add_index :places, [:google_id, :unit_id], unique: true
  end
end
