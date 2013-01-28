#!/usr/bin/env rake
require "fileutils"

begin
  require "bundler/setup"
rescue LoadError
  puts "You must `gem install bundler` and `bundle install` to run rake tasks"
end

Bundler::GemHelper.install_tasks

# Dummy App
# -----------------------------------------------------------------------------
APP_RAKEFILE = File.expand_path("../spec/dummy/Rakefile", __FILE__)
load "rails/tasks/engine.rake"

# RSpec
# -----------------------------------------------------------------------------
load "rspec/rails/tasks/rspec.rake"
namespace :spec do
  desc "Run the code examples in spec/features"
  RSpec::Core::RakeTask.new("features") do |t|
    t.pattern = "./spec/features/**/*_spec.rb"
  end
end
