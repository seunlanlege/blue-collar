class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.references :user, foreign_key: true
      t.string :stripe_subscription_id
      t.string :stripe_customer_id

      t.timestamps
    end
  end
end
