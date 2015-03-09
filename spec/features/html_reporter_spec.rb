require 'spec_helper'

describe 'Testing in the browser', :js => true do
  context 'for jasmine 2.0' do
    before do
      Jasminerice.jasmine_version = '2_0'
    end

    it 'will respond with the expected results' do
      visit '/jasmine'

      expect(page.all('.symbol-summary .passed').count).to eq 2
      expect(find('.bar.passed')).to have_text('2 specs, 0 failures')
    end
  end

  context 'for jasmine 1.3' do
    skip 'This needs a creative solution for restarting rails' do
      # This does work however it cannot be run directly after the test for setting 2.0.
      # The reason it fails is due to the mechanism for selection being already compiled (see app/assets/javascripts/jasminerice.js.erb)
      before do
        Jasminerice.jasmine_version = '1_3'
      end

      it 'will respond with the expected results' do
        visit '/jasmine'

        expect(page.all('.symbolSummary .passed').count).to eq 2
        expect(find('.passingAlert.bar')).to have_text('Passing 2 specs')
      end
    end
  end
end
