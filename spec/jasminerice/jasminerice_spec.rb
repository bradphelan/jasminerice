require "spec_helper"

describe Jasminerice do

  it "has configuration properties" do
    expect(Jasminerice.mount).to be(true)
    expect(Jasminerice.mount_at).to eql('/jasmine')
    expect(Jasminerice.spec_path).to eql('spec')
    expect(Jasminerice.fixture_path).to eql('spec/dummy/spec/javascripts/fixtures')
  end

  describe ".setup" do

    after do
      Jasminerice.mount_at = '/jasmine'
    end

    it "yields self" do
      config = nil
      Jasminerice.setup { |c| config = c }
      expect(config).to be(Jasminerice)
    end

    it "allows changing configuration" do
      Jasminerice.setup { |c| c.mount_at = '/jasminerice' }
      expect(Jasminerice.mount_at).to eql('/jasminerice')
    end

  end

end
