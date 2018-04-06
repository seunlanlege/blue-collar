class CreatePlaceReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :place_reviews do |t|
      t.belongs_to :place, null: false, index: true
      t.belongs_to :user, null: false, index: true

      t.integer :point_of_contact_type, null: false
      t.integer :star_bid_process, null: false
      t.integer :star_change_orders_accepted, null: false
      t.integer :star_time_respected, null: false
      t.integer :star_job_completed, null: false
      t.integer :star_payments_satifaction, null: false
      t.integer :star_work_with_again, null: false
      t.integer :star_overall, null: false

      # Optional
      t.text :comments, default: ""
      t.boolean :bought_materials, null: false, default: false
      t.boolean :other_party_involved, null: false, default: false
      t.decimal :dollars_lost, precision: 8, scale: 2, default: 0.00

      t.timestamps
    end
  end
end
