# Provide a simple gemspec so you can easily use your
# project in your rails apps through git.
Gem::Specification.new do |s|
  s.name        = "jasminerice"
  s.version     = "2.0.0"
  s.authors     = ["Brad Phelan"]
  s.summary     = "Pain free coffeescript unit testing for Rails using jasmine"
  s.description = "Full support for the Rails asset pipeline when bdd'ing your coffeescript or javascript using jasmine"

  s.platform    = Gem::Platform::RUBY
  s.files       = Dir["{app,config,lib,vendor}/**/*"] + ["MIT.LICENSE", "README.md"]

  s.add_dependency 'coffee-rails'
end
