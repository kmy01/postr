Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api do
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :users, only: [:create]
    resources :likes, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  get '*path', to: 'static_pages#root'
end
