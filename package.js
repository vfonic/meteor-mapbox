Package.describe({
  name:     'natestrauser:mapbox',
  summary:  'Mapbox.js with GL and plugins for Meteor apps',
  version:  '2.4.0_1',
  git:      'https://github.com/nate-strauser/meteor-mapbox.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['deps', 'underscore'], ['client']);

  api.addFiles(['mapbox.js'], ['client']);

  api.export('Mapbox', ['client']);
});
