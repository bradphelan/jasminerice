Jasminerice
===========

Utilizing [Jasmine](http://pivotal.github.com/jasmine/) and taking full advantage
of the Rails 3.1 asset pipeline. Jasminerice removes any excuse YOU have for
not testing your out of control sprawl of CoffeeScript files.
This project rocks and uses the MIT-LICENSE.

Headless Testing
----------------

See [guard-jasmine](https://github.com/netzpirat/guard-jasmine) for details.

Installation
------------

This is a gem specifically for Rails 3.1. Just include it in
your `Gemfile`:

```ruby
group :development, :test
  gem "jasminerice"
end
```

The engine is automatically mounted into your application in the development
and test environments. If you'd like to change that behavior, you can
override the array `Jasminerice.environments` in an initializer.

Usage
-----

### CoffeeScripts

Create a file `spec/javascripts/spec.js.coffee` with the following content:

	#=require_tree ./

This pulls in all your specs from the `javascripts` directory into Jasmine:

```bash
spec/javascripts/*_spec.js.coffee
spec/javascripts/*_spec.js
spec/javascripts/*_spec.js.erb
```

The Rails 3.1 asset pipeline using [Sprockets](https://github.com/sstephenson/sprockets)
and [Tilt](https://github.com/rtomayko/tilt) ensure conversion.

As well you can use the `#require` dependency mechanisms in your specs to
pull dependencies. Here's an example `spec/javascripts/foo.js.coffee`:

```coffeescript
#= require foo
#= require bar

describe "Foo", ->
  it "it is not bar", ->
    v = new Foo()
    expect(v.bar()).toEqual(false)

describe "Bar", ->
  it "it is not foo", ->
    v = new Bar()
    expect(v.foo()).toEqual(false)
```

### Stylesheets

For including stylesheets in your specs, Jasminerice uses `spec/javascripts/spec.css`.
Use Sprockets directives to include the right css files:

```css
/*
 *= require application
 */
```

### Fixtures

Jasminerice makes files located in the `spec/javascripts/fixtures` directory available
as fixture. For example, a file `spec/javascripts/fixtures/baz.html.haml` with the
following content:

```haml
%h2 Test Fixture
%p Using fixtures
```

is made available under the URL `/jasmine/fixtures/baz`. Since Jasminerice automatically
makes a patched version of [jasmine-jquery](https://github.com/velesin/jasmine-jquery)
available in your specs, you can load the `baz` fixture in your spec with:

```coffeescript
loadFixtures 'baz'
```

### Start server

Now start your server

```bash
rails s
```

Goto 

```bash
http://localhost:3000/jasmine
```

and there are your specs.

Author
------

* Brad Phelan (bradphelan@xtargets.com)
