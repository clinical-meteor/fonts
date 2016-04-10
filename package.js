Package.describe({
  name: 'clinical:fonts',
  version: '1.1.1',
  summary: 'Fonts for healthcare applications - 3 of 9 barcode, fontawesome icons, and opensans.',
  git: 'http://github.com/clinical-meteor/clinical-fonts',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use("fortawesome:fontawesome@4.4.0");
  api.imply("fortawesome:fontawesome");

  api.addFiles([
    'fonts/3OF9_NEW.TTF',
    'fonts/OpenSans-Light-webfont.ttf',
    'fonts/OpenSans-Regular-webfont.ttf'
  ], 'client', {
    isAsset: true
  });

  api.addFiles('client/fonts.css', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:fonts');
});
