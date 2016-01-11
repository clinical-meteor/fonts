Package.describe({
  name: 'clinical:fonts',
  version: '1.0.0',
  summary: 'Fonts for healthcare applications - 3 of 9 barcode, fontawesome icons, and opensans (a helvetica substitute).',
  git: 'http://github.com/clinical-meteor/clinical-fonts',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use("fortawesome:fontawesome@4.4.0");
  api.imply("fortawesome:fontawesome");

  api.addAssets([
    'fonts/3OF9_NEW.TTF', 'client',
    'fonts/OpenSans-Light-webfont.ttf', 'client',
    'fonts/OpenSans-Regular-webfont.ttf', 'client'
  ], 'client');

  api.addFiles('fonts-barcode.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:fonts');
  api.addFiles('fonts-tests.js');
});
