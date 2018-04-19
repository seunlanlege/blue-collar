Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "auth"

  namespace :api, defaults: {format: "json"} do
    namespace :v1 do
      resources :users, only: [:show, :update] do
        resource :subscription, only: [:create, :destroy]
      end
      resources :places, only: [:show] do
        resources :bids, only: [:create], controller: :place_bids
        resources :reviews, only: [:create], controller: :place_reviews
      end
      resources :reviews, only: [:index]
      resources :rewards, only: [:create], controller: :reward_transactions
    end
  end
end
