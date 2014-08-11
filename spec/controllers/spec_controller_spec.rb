require 'spec_helper'

describe Jasminerice::SpecController do
  describe 'view paths' do
    before do
      allow_any_instance_of(Jasminerice::SpecController).to receive(:render) { @view_paths = controller.view_paths }
      get 'fixtures', :use_route => :jasminerice
    end

    subject { @view_paths.map(&:original_path_set).flatten.map(&:to_s) }

    it { is_expected.to include Rails.root.to_s }
  end
end