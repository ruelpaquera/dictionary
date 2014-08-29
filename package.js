Package.describe({
  name: "dictionary",
  version: "0.0.0",
  summary: "Adds a simple value based dictionary"
});

Package.on_use(function (api) {
  // TODO: remove underscore deps _.each (used once)
  api.export('Dictionary');

  api.add_files('dictionary.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('dictionary', ['client', 'server']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('dictionary.tests.js', ['client', 'server']);

});
