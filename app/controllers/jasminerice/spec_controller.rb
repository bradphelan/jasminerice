module Jasminerice
  class SpecController <  Jasminerice::ApplicationController
  
   helper Jasminerice::SpecHelper rescue nil

    layout false

    def index
      @specsuite = params[:suite].try(:concat, "_spec") || "spec"
      @asset_options = %w(true false).include?(params[:debug]) ? { debug: params[:debug] == 'true' } : {}
    end

    def fixtures
      render "#{Jasminerice.fixture_path}/#{params[:filename]}"
    end
  end
end
