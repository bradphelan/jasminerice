require 'rails'
if ::Rails.version >= '3.1'
  module Jasminerice
    module Generators
      class InstallGenerator < ::Rails::Generators::Base
        source_root File.expand_path('../templates', __FILE__)

        def copy_files
          copy_file 'jasminerice.rb', 'config/initializers/jasminerice.rb'
          copy_file 'spec.js.coffee', 'spec/javascripts/spec.js.coffee'
          copy_file 'example_spec.js.coffee', 'spec/javascripts/example_spec.js.coffee'
          copy_file 'spec.css', 'spec/javascripts/spec.css'
          copy_file 'example_fixture.html.haml', 'spec/javascripts/fixtures/example_fixture.html.haml'
        end
      end
    end
  end
end
