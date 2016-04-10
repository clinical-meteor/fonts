describe('clinical:fonts', function () {
  var server = meteor();
  var client = browser(server);

  it('Application should use OpenSans or HelveticaNeue by default', function () {
    return client.execute(function () {
      //expect($('body').css('font-family')).to.equal('OpenSans, HelveticaNeue-Light, \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif');
      expect($('body').css('font-family')).to.have.string('Open Sans');
      expect($('body').css('font-family')).to.have.string('Helvetica Neue');
      expect($('body').css('font-family')).to.have.string('Arial');
      expect($('body').css('font-family')).to.have.string('sans-serif');

    });
  });
});
