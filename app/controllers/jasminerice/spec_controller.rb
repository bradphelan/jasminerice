module Jasminerice
  class SpecController <  Jasminerice::ApplicationController
    begin
      include Jasminerice::HelperMethods
    rescue
      puts "Declare your Jasminerice::HelperMethods (perhaps put inside lib/) to make helpers available to jasminerice fixtures"
    end

    layout false

    def index
    end

    def fixtures
      render "spec/javascripts/fixtures/#{params[:filename]}"
    end
  end
end
