require "spec_helper"

describe Jasminerice::Engine do

  it "is a class" do
    Jasminerice::Engine.should be_a(Class)
  end

  it "has been isolated with a name" do
    expect(Jasminerice::Engine.isolated?).to be(true)
    expect(Jasminerice::Engine.railtie_name).to eql("jasminerice")
  end

  it "adds asset paths from configuration" do
    expect(Rails.application.config.assets.paths).to include(Rails.root.join("spec/javascripts").to_s)
    expect(Rails.application.config.assets.paths).to include(Rails.root.join("spec/stylesheets").to_s)
  end

end
