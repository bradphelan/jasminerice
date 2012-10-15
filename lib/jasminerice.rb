require "jasminerice/engine"
require 'haml'

module Jasminerice
  mattr_accessor :mount
  self.mount = true
end
