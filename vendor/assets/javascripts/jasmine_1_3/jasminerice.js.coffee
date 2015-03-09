#=require jasmine_1_3/jasmine
#=require jasmine_1_3/jasmine-html
#=require jasmine_1_3/jasmine-jquery

console.log('running V1.3')

(->
  execJasmine = ->
    jasmineEnv.execute()
  jasmineEnv = jasmine.getEnv()
  jasmineEnv.updateInterval = 1000

  window.jsApiReporter = new jasmine.JsApiReporter()
  htmlReporter = new jasmine.HtmlReporter()

  jasmineEnv.addReporter htmlReporter
  jasmineEnv.addReporter jsApiReporter

  jasmineEnv.specFilter = (spec) ->
    htmlReporter.specFilter spec

  jasmine.getFixtures().fixturesPath = 'jasmine/fixtures'
  jasmine.getStyleFixtures().fixturesPath = 'jasmine/fixtures'
  jasmine.getJSONFixtures().fixturesPath = 'jasmine/fixtures/json'

  jasmine.rice = {}
  jasmine.rice.autoExecute = true

  currentWindowOnload = window.onload
  window.onload = ->
    currentWindowOnload()  if currentWindowOnload
    if jasmine.rice.autoExecute
      execJasmine()
)()
