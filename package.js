Package.describe({
  name:     'vfonic:mapbox',
  summary:  'Mapbox.js with GL and plugins for Meteor apps',
  version:  '3.1.1_1',
  git:      'https://github.com/vfonic/meteor-mapbox.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['deps', 'underscore'], ['client']);

  api.addFiles(['mapbox.js'], ['client']);

  api.export('Mapbox', ['client']);
});
