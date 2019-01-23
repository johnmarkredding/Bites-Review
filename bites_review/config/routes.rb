Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "/restaurants/search/:name", to: "restaurants#search"
      resources :restaurants, only: [:index]
      resources :items, only: [:index]
      resources :comments, only: [:index,:create]
    end
  end
end
