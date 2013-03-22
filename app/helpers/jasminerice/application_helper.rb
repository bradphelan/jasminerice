module Jasminerice
  module ApplicationHelper
    def cover_with_blanket?(suite)
      source_to_cover = "#{suite}_cover"
      Rails.application.assets.find_asset(source_to_cover) ? source_to_cover : false
    end
  end
end
