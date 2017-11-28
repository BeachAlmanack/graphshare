Rails.application.routes.draw do
  root to: 'staticpages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy], controller: :session
    resources :users, only: [:create, :show]
    resources :datasets, only: [:create, :index, :show, :destroy]
    resources :charts, only: [:create, :show, :index]
    get '/fullcharts/', to: 'charts#all'
  end
end
