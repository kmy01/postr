Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resource :follows, only: [:create, :destroy]
    resources :tags, only: [:index]
  end

  post '/countdown', to: 'countdown#countdown'

  get '*path', to: 'static_pages#root'
end
