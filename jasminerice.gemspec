# Provide a simple gemspec so you can easily use your
# project in your rails apps through git.
Gem::Specification.new do |s|
  s.name        = "jasminerice"
  s.summary     = "Pain free coffeescript unit testing for Rails 3.1 using jasmine"
  s.description = "Full support for the Rails 3.1 asset pipeline when bdd'ing your coffeescript or javascript using jasmine"
  s.files       = `git ls-files`.split "\n"
  s.authors     = ["Brad Phelan"]
  s.version     = "0.0.8"
  s.platform    = Gem::Platform::RUBY
  s.add_dependency( 'haml' )
end
