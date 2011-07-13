Application::Application.routes.draw do
  get "spec/index",              :controller => :spec, :action => :index
  get "spec/fixtures/:filename", :controller => :spec, :action => :fixtures

  root :to => "spec#index"
end
