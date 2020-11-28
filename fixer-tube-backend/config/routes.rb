Rails.application.routes.draw do
  resources :videos, param: :slug
  resources :brands, param: :slug
  resources :categories, param: :slug
  resources :main_categories, only: [:index], param: :slug
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
