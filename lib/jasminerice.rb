require "jasminerice/engine"

module Jasminerice
  # Determine whether or not to mount the Jasminerice engine implicitly. True/False
  mattr_accessor :mount
  @@mount = true

  # Specify location at which to mount the engine, default to '/jasmine'
  mattr_accessor :mount_at
  @@mount_at = '/jasmine'

  #Specify the path for fixutures, defaults to 'spec/javascripts/fixtures'
  mattr_accessor :fixture_path
  @@fixture_path = 'spec/javascripts/fixtures'

  # Default way to setup Jasminerice. Run rails generate jasminerice:install to create
  # a fresh initializer with all configuration values.
  def self.setup
    yield self
  end
end
