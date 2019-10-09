let latitude, longitude;

latitude = 0; // latitude is north/south amount
longitude = 0; // longitude is east/west amount - prime meridian (0) is London, Longitude rewards - https://en.wikipedia.org/wiki/Longitude_rewards
let firstTimeLiveLocation = true; //boolean state for first time run, hacky

function displayGeolocationError() {
  let informationTag = document.getElementById("currentLocation");
  informationTag.innerHTML = `<b>Error</b> - geolocation not available, do you have location services enabled?<br/><a href='https://support.apple.com/en-gb/HT207092'>Help for Apple iOS devices</a>.<br/><a href='https://support.google.com/accounts/answer/3467281?hl=en'>Help for Google Android devices</a>.<br/>Geolocation is <b>required</b> to be able to find yourself on the map automatically.`;
}

function checkForGeolocation() {
  if ("geolocation" in navigator) {
    if (firstTimeLiveLocation) {
      // only log once, for performance sake
      console.log("geolocation available");
    }
    return true;
  } else {
    if (firstTimeLiveLocation) {
      // only log once, for performance sake
      console.log("geolocation not available");
    }
    displayGeolocationError();
    return false;
  }
}

//actually set up the page, the map with geolocate button, the tour, the add waypoint button and the saving button
checkForGeolocation();
