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

ActiveRecord::Schema.define(version: 20180326154956) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "place_bids", force: :cascade do |t|
    t.integer "place_id"
    t.integer "user_id"
    t.integer "bid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "place_reviews", force: :cascade do |t|
    t.integer "place_id"
    t.integer "reviewer_id"
    t.integer "point_of_contact_type"
    t.text "comments"
    t.integer "star_bid_process"
    t.integer "star_change_orders_accepted"
    t.integer "star_time_respected"
    t.integer "star_job_completed"
    t.integer "star_payments_satifaction"
    t.integer "star_work_with_again"
    t.integer "star_overall"
    t.boolean "bought_materials"
    t.boolean "other_party_involved"
    t.decimal "dollars_lost", precision: 8, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string "google_place_id"
    t.string "name"
    t.string "vicinity"
    t.integer "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reward_transactions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "tx_type"
    t.integer "redeem_type"
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "trade"
    t.string "strip_token"
    t.boolean "contactable"
    t.integer "place_id"
    t.string "job_position"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

end
