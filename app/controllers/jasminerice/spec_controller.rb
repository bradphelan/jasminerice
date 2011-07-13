module Jasminerice
  class SpecController <  ApplicationController
    def index
      render :layout => false
    end
    def fixtures
      render "spec/fixtures/#{params[:filename]}"
    end
  end
end
