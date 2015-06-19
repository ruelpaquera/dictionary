Package.describe({
  name: "ground:dictionary",
  version: "0.2.1",
  summary: "Adds a simple value based dictionary",
  git: "https://github.com/GroundMeteor/dictionary.git"
});

Package.onUse(function (api) {

  api.versionsFrom('1.0');

  api.export('Dictionary');

  api.addFiles('dictionary.js', ['client', 'server']);
});

Package.onTest(function (api) {
  api.use('ground:dictionary', ['client', 'server']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('dictionary.tests.js', ['client', 'server']);

});
