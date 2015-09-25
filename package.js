Package.describe({
  name: 'numtel:rest-test',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('mongo');
  api.use('underscore');
  api.use('random');
  api.addFiles('rest-test.js');
  api.export('Players');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('numtel:rest-test');
  api.use('simple:rest@0.2.3');
  api.use('http');
  api.addFiles('rest-test-tests.js');
});
