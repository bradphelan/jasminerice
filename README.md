Jasminerice
===========

Utilizing (jasmine)[http://pivotal.github.com/jasmine/] and taking full advantage
of the Rails 3.1 asset pipeline jasmine rice removes any excuse YOU have for
not testing your out of control sprawl of coffeescript files.
This project rocks and uses MIT-LICENSE.

Setup For Rails 3.1
-------------------

This is a gem specifically for Rails 3.1. Just include it in
your Gemfile so

	gem "jasminerice"

Now add a route to the end of your config.routes but only for development and test

	if ["development", "test"].include? Rails.env
		mount Jasminerice::Engine => "/jasmine" 
	end

Create a single file called

	specs/javascripts/spec.js.coffee

with the following content

	#=require_tree ./

This pulls in all your

	specs/javascripts/*_spec.js.coffee
	specs/javascripts/*_spec.js
	specs/javascripts/*_spec.js.erb
	etc

into jasmine. For example

spec/javascripts/foo.js.coffe

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


The Rails 3.1 asset pipeline using sprockets and tilt
ensure conversion. As well you can use the #require
dependency mechanisms

Now start your server

	rails s

Goto 

	http://localhost:3000/jasmine

and there are your specs.

Questions:

	bradphelan@xtargets.com




