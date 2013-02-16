Jasminerice
===========

Utilizing [Jasmine](http://pivotal.github.com/jasmine/) and taking full advantage of the Rails 3.1 asset pipeline Jasminerice removes any excuse YOU have for not testing your out of control sprawl of CoffeeScript files.

This project rocks and uses the MIT-LICENSE.


## Development Notice

Brad Phelan is no longer actively developing this project but is accepting reasonable pull requests, so continue on with contributing.

This project is looking for a home :)

#### 2013/1/17:
Brad ([bradphelan](https://github.com/bradphelan)) posted a notice saying that he wasn't actively maintaining the project and that it was looking for a home.

#### 2013/1/27:
I ([jejacks0n](https://github.com/jejacks0n)) offered to contribute to the project, and Brad granted me collaboration privileges. I added some specs and integration tests that will make contributing a little easier.

We'll be managing pull requests and issues together, and if someone would like to take over and move it to a different home you should contact Brad directly.


## Headless Testing

See [guard-jasmine](https://github.com/netzpirat/guard-jasmine) for details.


## Installation

This gem has been tested and run with Rails 3.1 and 3.2. It should also run on Rails 4.

Just include it in your `Gemfile`:

```ruby
group :development, :test do
  gem "jasminerice", :git => 'https://github.com/bradphelan/jasminerice.git'
end
```

The engine is automatically mounted into your application in the development and test environments. If you'd like to change that behavior, you can change which groups the gem is included in via the gemfile.

Optionally, you can run the installer.

```bash
rails g jasminerice:install
```

This will add the required `spec.js.coffee`, an example spec, and fixture to help get you started. It will also add a intializer `config/initializers/jasminerice.rb` which can be used for easy setup of Jasminerice's options.


## Usage

### CoffeeScripts

Create a file `spec/javascripts/spec.js.coffee` (or run the install generator), and add the following content.

```coffeescript
#= require_tree ./
```

In the case where you need access to all your application javascripts then you can use something like the following, which will pull in all the files from your application and all specs from the `javascripts` directory.

```coffeescript
#= require_tree ./
#= require_tree ../../app/assets/javascripts
```

The Rails 3.1 asset pipeline using [Sprockets](https://github.com/sstephenson/sprockets) and [Tilt](https://github.com/rtomayko/tilt) ensure conversion to javascript.

You can also use the `#= require` directive in your specs to pull in dependencies manually. Here's an example `spec/javascripts/example_spec.js.coffee`:

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

For including stylesheets in your specs, Jasminerice uses `spec/javascripts/spec.css`. You can use Sprockets directives to include css files here.

```css
/*= require application
 */
```

### Fixtures

Jasminerice makes files located in the `spec/javascripts/fixtures` directory available as fixture. For example, if you put a file named `example_fixture.html.haml` in that path it will be available at the `/jasmine/fixtures/example_fixture` URL.

spec/javascripts/fixtures/example_fixture.html.haml
```haml
%h2 Test Fixture
%p Using fixtures
```

Since Jasminerice automatically makes a patched version of [jasmine-jquery](https://github.com/velesin/jasmine-jquery) available in your specs, you can load the example fixture in your spec with the following.

```javascript
loadFixtures('example_fixture')
```

You can also load JSON fixtures, e.g. `spec/javascripts/fixtures/json/bar.json`

```javascript
getJSONFixture('bar')
```

### Helper Methods

You can declare Jasminerice::SpecHelper (perhaps put inside lib/) to make helpers available to jasminerice fixtures.

So in your lib directory, create the helper, e.g. `lib/jasminerice/spec_helper.rb`

```ruby
module Jasminerice
  module SpecHelper
    def print_a_test
      "foo"
    end
  end
end
```

Then you can use it in your fixtures.

spec/javascripts/fixtures/example_fixture.html.haml
```haml
%h1 Here is my helper
= print_a_test
```

### Running Specs

Start your server...

```bash
rails s
```

Browse to...

```
http://localhost:3000/jasmine
```

Watch your specs run.

### Asset debugging

You can override your current environment's `config.assets.debug` configuration per request by adding `?debug=false` or `?debug=true` to the jasmine path, eg.

```
http://localhost:3000/jasmine?debug=false
```

This will concatenate all your css and javascript into single file which can improve your suite's loading speed significantly.

### Compatibility with Require.js

If you use [Require.js](http://requirejs.org/) in your project and need to load your modules in your jasmine specs, there is an option to prevent jasminerice from automatically executing the test runner before the modules are defined. This enables you to start the execution manually whenever you want in your `spec/javascripts/spec.js.coffee` file:

```coffeescript
#= require your/specs/and/other/stuff
# at the end of this file add:

jasmine.rice.autoExecute = false

define 'jasmine.waitsfor.requirejs', ->
require ['jasmine.waitsfor.requirejs'], jasmine.getEnv().execute
```

The shown example defines a dummy module in require.js that is required immediately on the next line. This is a simple hack to wait until require.js has initialized all modules and start the jasmine runner after that.

Of course you can use `jasmine.rice.autoExecute = false` also for all other cases where you need to control when your specs should be executed!


## Author

* Brad Phelan (bradphelan@xtargets.com)
