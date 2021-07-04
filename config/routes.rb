Rails.application.routes.draw do
  post 'sessions/login'
  post 'sessions/register'
  get 'sessions/auto_login'

  scope '/api' do
    resources :todos
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
