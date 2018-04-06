class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :google_id, null: false
      t.string :name, null: false
      t.string :vicinity, null: false
      t.integer :category, null: false

      t.timestamps
    end

    add_index :places, :google_id, unique: true
  end
end
