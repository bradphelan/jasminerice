module Jasminerice
  class SpecController <  Jasminerice::ApplicationController
    begin
      include Jasminerice::HelperMethods
    rescue
    end

    layout false

    def index
      @specsuite = params[:suite].try(:concat, "_spec") || "spec"
      @asset_options = %w(true false).include?(params[:debug]) ? { debug: params[:debug] == 'true' } : {}
    end

    def fixtures
      render "spec/javascripts/fixtures/#{params[:filename]}"
    end
  end
end
