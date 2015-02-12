exports.geocode = function(address) {
  return Parse.Cloud.httpRequest({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
      sensor: 'false',
      address: address.replace(/ /g, '+')
    }
  }).done(
    function(httpResponse) {
      if (JSON.parse(httpResponse.text).results[0]) {
        var location = JSON.parse(httpResponse.text).results[0].geometry.location;
        return new Parse.GeoPoint(location.lat, location.lng);
      } else {
        return null;
      }
    }
  );
};