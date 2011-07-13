Jasminerice::Engine.routes.draw do
  get "spec/index"
  get "spec/fixtures/:filename"

  root :to => "spec#index"
end
