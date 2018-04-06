class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :google_place_id, null: false
      t.string :name, null: false
      t.string :vicinity, null: false
      t.integer :category # is this needed?

      t.timestamps
    end
  end
end
