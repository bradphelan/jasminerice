module Jasminerice
  class SpecController <  Jasminerice::ApplicationController
    begin
      include Jasminerice::HelperMethods
    rescue
    end

    layout false

    def index
    end

    def fixtures
      render "spec/javascripts/fixtures/#{params[:filename]}"
    end
  end
end
