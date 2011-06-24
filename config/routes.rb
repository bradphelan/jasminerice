Jasminerice::Engine.routes.draw do
  resources :spec, :controller => 'spec'
  root :to => "spec#index"
end
