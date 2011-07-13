Jasminerice::Engine.routes.draw do
  resources :spec, :controller => 'spec' do
    get "fixtures/:filename", :action => :fixtures
  end
  root :to => "spec#index"
end
