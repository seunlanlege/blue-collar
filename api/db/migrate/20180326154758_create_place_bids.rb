class CreatePlaceBids < ActiveRecord::Migration[5.1]
  def change
    create_table :place_bids do |t|
      t.integer :user_id
      t.integer :bid

      t.belongs_to :place, index: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
