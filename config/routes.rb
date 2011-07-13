Jasminerice::Engine.routes.draw do
  resources :spec, :controller => 'spec', :only => [:index] do
    get "fixtures/:filename", :action => :fixtures
  end
  match "fixtures/:filename", :to => "spec#fixtures#:filename"

  root :to => "spec#index"
end
