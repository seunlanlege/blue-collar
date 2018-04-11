class CreatePlaceBids < ActiveRecord::Migration[5.1]
  def change
    create_table :place_bids do |t|
      t.belongs_to :place, null: false, index: true
      t.belongs_to :user, null: false, index: true

      t.timestamps
    end
  end
end
