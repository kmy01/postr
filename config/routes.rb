Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resource :follows, only: [:create, :destroy]
    resource :tags, only: [:index]
  end

  get '*path', to: 'static_pages#root'
end
