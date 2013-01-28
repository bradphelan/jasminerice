Jasminerice::Engine.routes.draw do
  resources :spec, :controller => 'spec', :only => [:index] do
    get "fixtures/*filename", :action => :fixtures
  end
  get "fixtures/*filename", :to => "spec#fixtures"
  get "/(:suite)", :to => "spec#index"
end
