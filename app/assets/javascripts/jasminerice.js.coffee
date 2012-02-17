#=require jasmine
#=require jasmine-html
#=require jasmine-jquery-1.3.1

(->
  execJasmine = ->
    jasmineEnv.execute()
  jasmineEnv = jasmine.getEnv()
  jasmineEnv.updateInterval = 1000

  window.jsApiReporter = new jasmine.JsApiReporter()
  trivialReporter = new jasmine.TrivialReporter()

  jasmineEnv.addReporter trivialReporter
  jasmineEnv.addReporter jsApiReporter

  jasmineEnv.specFilter = (spec) ->
    trivialReporter.specFilter spec

  jasmine.rice = {}
  jasmine.rice.autoExecute = true
  
  currentWindowOnload = window.onload
  window.onload = ->
    currentWindowOnload()  if currentWindowOnload
    if jasmine.rice.autoExecute
      execJasmine()
)()
