describe('clinical:fonts', function () {
  var server = meteor();
  var client = browser(server);

  it('Application should use OpenSans or HelveticaNeue by default', function () {
    return client.execute(function () {
      expect($('body').css('font-family')).to.equal('"OpenSans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif');
    });
  });
});
