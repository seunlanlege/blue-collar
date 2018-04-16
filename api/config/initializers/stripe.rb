require "stripe"
Stripe.api_key = Rails.application.secrets.stripe_secret_key

STRIPE_CONFIG = {
  plan_id: Rails.application.secrets.stripe_plan_id,
}
