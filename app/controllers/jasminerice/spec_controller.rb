module Jasminerice
  class SpecController <  Jasminerice::ApplicationController
    layout false

    def index
    end

    def fixtures
      render "spec/javascripts/fixtures/#{params[:filename]}"
    end
  end
end
