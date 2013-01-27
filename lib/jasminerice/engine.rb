module Jasminerice
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
