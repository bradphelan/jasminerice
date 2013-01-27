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

  class Engine < Rails::Engine
    isolate_namespace Jasminerice

    initializer :assets, :group => :all do |app|
      app.config.assets.paths << Rails.root.join("spec", "javascripts")
      app.config.assets.paths << Rails.root.join("spec", "stylesheets")
    end

    config.after_initialize do |app|
      app.routes.prepend do
        mount Jasminerice::Engine => Jasminerice.mount_at
      end if Jasminerice.mount
    end
  end
end
