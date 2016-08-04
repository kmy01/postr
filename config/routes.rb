Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api do
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
