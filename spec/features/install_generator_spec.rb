require "spec_helper"

feature "Installing Jasminerice", :aruba => true do

  before do
    unset_bundler_env_vars
    run_simple("bundle exec rails new testapp --skip-bundle")
    cd("testapp")
    append_to_file("Gemfile", %{\ngem "jasminerice", :path => "#{File.expand_path('../../../', __FILE__)}"\n})
    run_simple("bundle install --local")
  end

  scenario "installs the expected files" do
    run_simple("bundle exec rails generate jasminerice:install --trace")
    expected = <<-OUTPUT
      create  config/initializers/jasminerice.rb
      create  spec/javascripts/spec.js.coffee
      create  spec/javascripts/example_spec.js.coffee
      create  spec/javascripts/spec.css
      create  spec/javascripts/fixtures/example_fixture.html.haml
    OUTPUT
    assert_partial_output(expected, all_output)
    check_file_presence(["config/initializers/jasminerice.rb"], true)
    check_file_presence(["spec/javascripts/spec.js.coffee"], true)
    check_file_presence(["spec/javascripts/example_spec.js.coffee"], true)
    check_file_presence(["spec/javascripts/spec.css"], true)
    check_file_presence(["spec/javascripts/fixtures/example_fixture.html.haml"], true)
  end
end
