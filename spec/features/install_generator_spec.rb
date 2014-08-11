require "spec_helper"

feature "Installing Jasminerice", :aruba => true do
  let(:file_names) do
    [
      'config/initializers/jasminerice.rb',
      'spec/javascripts/spec.js.coffee',
      'spec/javascripts/example_spec.js.coffee',
      'spec/javascripts/spec.css',
      'spec/javascripts/fixtures/example_fixture.html.haml',
      'app/assets/javascripts/foo.js.coffee',
      'app/assets/javascripts/bar.js.coffee'
    ]
  end

  before do
    unset_bundler_env_vars
    run_simple("bundle exec rails new testapp --skip-bundle")
    cd("testapp")
    append_to_file("Gemfile", %{\ngem "jasminerice", :path => "#{File.expand_path('../../../', __FILE__)}"\n})
    run_simple("bundle install --local")
    run_simple('bundle exec rails generate jasminerice:install --trace')
  end

  context "when installing" do
    it('will install the files') do
      file_names.each { |name| check_file_presence([name], true) }
      file_names.each { |name| expect(all_output).to include "create  #{name}" }
    end
  end
end
