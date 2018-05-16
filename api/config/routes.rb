Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  mount_devise_token_auth_for "User", at: "auth"

  namespace :api, defaults: {format: "json"} do
    namespace :v1 do
      resources :facebook_users, only: [:create]
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
