Rails.application.routes.draw do
  root to: 'staticpages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy], controller: :session
    resources :users, only: [:create]
    resources :datasets, only: [:create, :index]
  end
end
