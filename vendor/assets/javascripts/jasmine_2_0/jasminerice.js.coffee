#=require jasmine_2_0/jasmine
#=require jasmine_2_0/jasmine-html
#=require jasmine_2_0/boot
#=require jquery
#=require jasmine_2_0/jasmine-jquery

console.log('running V2.0')

# Override the fixture paths
jasmine.getFixtures().fixturesPath = 'jasmine/fixtures'
jasmine.getStyleFixtures().fixturesPath = 'jasmine/fixtures'
jasmine.getJSONFixtures().fixturesPath = 'jasmine/fixtures/json'
