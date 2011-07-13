#=require jasmine
#=require jasmine-html
#=require jasmine-jquery-1.2.0

(->
  execJasmine = ->
    jasmineEnv.execute()
  jasmineEnv = jasmine.getEnv()
  jasmineEnv.updateInterval = 1000
  trivialReporter = new jasmine.TrivialReporter()
  jasmineEnv.addReporter trivialReporter
  jasmineEnv.specFilter = (spec) ->
    trivialReporter.specFilter spec
  
  currentWindowOnload = window.onload
  window.onload = ->
    currentWindowOnload()  if currentWindowOnload
    execJasmine()
)()
