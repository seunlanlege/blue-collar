Rails.application.routes.draw do
  namespace :admin do
    resources :users
    resources :places
    resources :place_bids
    resources :place_reviews
    resources :reward_transactions
    resources :subscriptions

    root to: "users#index"
  end

  mount_devise_token_auth_for "User", at: "auth"

  namespace :api, defaults: {format: "json"} do
    namespace :v1 do
      resources :users, only: [:show, :update] do
        resource :subscription, only: [:create, :destroy]
        resource :rewards, only: [:create]
      end
      resources :places, only: [:show] do
        resources :bids, only: [:create], controller: :place_bids
        resources :reviews, only: [:create], controller: :place_reviews
      end
      resources :reviews, only: [:index]
    end
  end
end
