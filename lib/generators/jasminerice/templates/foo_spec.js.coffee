# use require to load any .js file available to the asset pipeline
#= require foo
#= require bar

describe "Foo", ->
  loadFixtures 'baz' # located at 'spec/javascripts/fixtures/baz.html.haml'
  it "it is not bar", ->
    v = new Foo()
    expect(v.bar()).toEqual(false)

describe "Bar", ->
  it "it is not foo", ->
    v = new Bar()
    expect(v.foo()).toEqual(false)