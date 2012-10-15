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
group :development, :test do
  gem "jasminerice"
end
```

The engine is automatically mounted into your application in the development
and test environments. If you'd like to change that behavior, you can
change which groups the gem is included in via the gemfile.

Optionally, you can run the installer

```bash
rails g jasminerice::install
```

This will add the required `spec.js.coffee` together with a sample spec and 
fixture to help get you started.

Usage
-----

### CoffeeScripts

Create a file `spec/javascripts/spec.js.coffee` with the following content:

	#=require_tree ./

In the case where you need access to all your application javascript assets then create the file `spec/javascripts/spec.js.coffee` with the following contents:

	#=require_tree ./
	#=require_tree ../../app/assets/javascripts

This pulls in all your specs from the `javascripts` directory into Jasmine:

```bash
spec/javascripts/*_spec.js.coffee
spec/javascripts/*_spec.js
spec/javascripts/*_spec.js.erb
```

The Rails 3.1 asset pipeline using [Sprockets](https://github.com/sstephenson/sprockets)
and [Tilt](https://github.com/rtomayko/tilt) ensure conversion.

As well you can use the `#require` dependency mechanisms in your specs to
pull dependencies. Here's an example `spec/javascripts/foo_spec.js.coffee`:

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

### Helper Methods
You can declare Jasminerice::HelperMethods (perhaps put inside lib/) to make helpers available to jasminerice fixtures.

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

### Compatibility with Require.js

If you use [Require.js](http://requirejs.org/) in your project and need to load your 
modules in your jasmine specs, there is an option to prevent jasminerice from automatically
executing the test runner before the modules are defined. This enables you to start the 
execution manually whenever you want in your `spec/javascripts/spec.js.coffee` file:

    #= require your/specs/and/other/stuff
    # at the end of this file add:
    
    jasmine.rice.autoExecute = false

    define 'jasmine.waitsfor.requirejs', ->  
    require ['jasmine.waitsfor.requirejs'], ->
      jasmine.getEnv().execute()
      
The shown example defines a dummy module in require.js that is required immediately on the next
line. This is a simple hack to wait until require.js has initialized all modules and start the
jasmine runner after that.

Of course you can use `jasmine.rice.autoExecute = false` also for all other cases where you need
to control when your specs should be executed!

Author
------

* Brad Phelan (bradphelan@xtargets.com)
