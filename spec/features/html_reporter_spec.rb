require "spec_helper"

feature "Testing in the browser", :js => true do

  scenario "gives me the expected results" do
    visit "/jasmine"

    expect(page.all(".symbolSummary .passed").length).to be(2)
    expect(find('.passingAlert.bar')).to have_text("Passing 2 specs")
  end
end
