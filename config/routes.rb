Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
