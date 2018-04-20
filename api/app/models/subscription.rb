class Subscription < ApplicationRecord
  belongs_to :user

  def fetch_details
    if !self.stripe_subscription_id || !self.stripe_customer_id || !self.stripe_customer_source
      nil
    else
      customer = Stripe::Customer.retrieve(self.stripe_customer_id)
      card = customer.sources.retrieve(self.stripe_customer_source)
      subscription = Stripe::Subscription.retrieve(self.stripe_subscription_id)

      {
        card_last_four: card.last4,
        next_billing: subscription.current_period_end,
        price_in_cents: subscription.plan.amount,
      }
    end
  end
end
