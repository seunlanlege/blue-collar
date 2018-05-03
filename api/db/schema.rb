# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180426110646) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "place_bids", force: :cascade do |t|
    t.bigint "place_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place_id"], name: "index_place_bids_on_place_id"
    t.index ["user_id"], name: "index_place_bids_on_user_id"
  end

  create_table "place_reviews", force: :cascade do |t|
    t.bigint "place_id", null: false
    t.bigint "user_id", null: false
    t.string "poc_name"
    t.string "client_name"
    t.string "string"
    t.integer "poc_type", null: false
    t.integer "star_bid_process", null: false
    t.integer "star_change_orders_accepted", null: false
    t.integer "star_time_respected", null: false
    t.integer "star_job_completed", null: false
    t.integer "star_payments_satifaction", null: false
    t.integer "star_work_with_again", null: false
    t.text "comments", default: ""
    t.boolean "bought_materials", default: false, null: false
    t.boolean "other_party_involved", default: false, null: false
    t.decimal "dollars_lost", precision: 8, scale: 2, default: "0.0"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "star_overall", null: false
    t.index ["place_id"], name: "index_place_reviews_on_place_id"
    t.index ["user_id"], name: "index_place_reviews_on_user_id"
  end

  create_table "places", force: :cascade do |t|
    t.string "google_id", null: false
    t.string "name", null: false
    t.string "formatted_address", null: false
    t.integer "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "latitude", null: false
    t.string "longitude", null: false
    t.string "state", null: false
    t.index ["google_id"], name: "index_places_on_google_id", unique: true
  end

  create_table "reward_transactions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "tx_type", null: false
    t.integer "redeem_type"
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reward_transactions_on_user_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.bigint "user_id"
    t.string "stripe_subscription_id"
    t.string "stripe_customer_id"
    t.string "stripe_customer_source"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "trade"
    t.boolean "contactable"
    t.integer "job_position"
    t.string "referral_code", null: false
    t.bigint "place_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["place_id"], name: "index_users_on_place_id"
    t.index ["referral_code"], name: "index_users_on_referral_code", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "subscriptions", "users"
end
