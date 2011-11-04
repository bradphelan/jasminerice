require "jasminerice/engine"
require 'haml'

module Jasminerice
  mattr_accessor :environments
  self.environments = %w(development test)
end
