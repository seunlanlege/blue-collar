Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:update], defaults: {format: :json}
      resources :reviews, :controller => :place_reviews, :as => :place_reviews, defaults: {format: :json}
      resources :places, defaults: {format: :json}
    end
  end
end
