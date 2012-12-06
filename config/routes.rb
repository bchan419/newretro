Retros::Application.routes.draw do

  root to: 'retros#index'
  
  resources :retros
  resources :items

end
