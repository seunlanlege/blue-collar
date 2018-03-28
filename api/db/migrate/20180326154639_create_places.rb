class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :google_place_id
      t.string :name
      t.string :vicinity
      t.integer :category

      t.timestamps
    end
  end
end
