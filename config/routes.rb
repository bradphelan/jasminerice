Jasminerice::Engine.routes.draw do
  resources :spec, :controller => 'spec', :only => [:index] do
    get "fixtures/*filename", :action => :fixtures
  end
  get "fixtures/*filename", :to => "spec#fixtures", :via => :any

  root :to => "spec#index"
end

if Jasminerice.mount
  Rails.application.routes.draw do
    mount Jasminerice::Engine => "/jasmine"
  end
end
