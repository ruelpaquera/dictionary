Package.describe({
  name: "ground:dictionary",
  version: "0.0.1",
  summary: "Adds a simple value based dictionary"
});

Package.on_use(function (api) {

  api.versionsFrom && api.versionsFrom('METEOR@0.9.1');

  api.export('Dictionary');

  api.add_files('dictionary.js', ['client', 'server']);
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use('ground:dictionary', ['client', 'server']);
  } else {
    api.use('dictionary', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('dictionary.tests.js', ['client', 'server']);

});
