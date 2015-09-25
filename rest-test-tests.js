// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(Players.find().count(), 6);
});

Tinytest.addAsync('rest routes', function (test, done) {
  HTTP.get(Meteor.absoluteUrl() + '/publications/api-routes',
    function(error, result) {
      test.equal(result.statusCode, 200);
      done();
    }
  );
});
