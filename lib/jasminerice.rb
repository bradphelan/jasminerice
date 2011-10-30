require "jasminerice/engine"

module Jasminerice
  mattr_accessor :environments
  self.environments = %w(development test)
end
