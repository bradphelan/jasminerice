require 'spec_helper'

feature 'Testing in the browser', :js => true do

  scenario 'gives me the expected results' do
    visit '/jasmine'

    expect(page.all('.symbol-summary .passed').count).to eq 2
    expect(find('.bar.passed')).to have_text('2 specs, 0 failures')
  end
end
