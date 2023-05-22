define({ 


// **MVC Example**

 
currentPositionSuccessCallback: function(position) {
    /* 
  //  position object will have the below properties .
         latitude = position.coords.latitude 
         longitude = position.coords.longitude
         altitude = position.coords.altitude
         atitudeAccuracy = position.coords.altitudeAccuracy
         heading = position.coords.heading
         speeding = position.coords.speeding
         timestamp = position.timestamp
    */
    alert(JSON.stringify(position));
    /* use the position depending on the use case ,some of the use cases are listed below .    
    1. Get the nearby events(like ATMs, Restaurants …etc.)  based on the user current location
    2. In a tracking-based scenario ,use as an initial position of the user .
    */

  },
  currentPositionFailureCallback: function(error) {
    alert(JSON.stringify(error));
  },
  getCurrentPositionOfDevice: function() {
    var options = {};
    options.enableHighAccuracy = true; //  uses provider that gets accurate location
    options.timeout = 10000; // timeout in milliseconds  
    options.requireBackgroundAccess  = true; // gets the location updates in the background as well
    voltmx.location.getCurrentPosition(this.currentPositionSuccessCallback, this.currentPositionFailureCallback, options);
  }

  /* Please see example of getCurrentPosition() in "frmTrackingUserLocation" Form of [sample app](http://docs.voltmx.com/voltmxlibrary/iris/zip/sampleapps/LocationApp.zip)*/
  ```

**Free form Example**

  ```
function currentPositionSuccessCallback(position) {
  /* 
    // position object will have the below properties .
    latitute = position.coords.latitude
    longitude = position.coords.longitude
    altitude = position.coords.altitude
    atitudeAccuracy = position.coords.altitudeAccuracy
    heading = position.coords.heading
    speeding = position.coords.speeding
    timestamp = position.timestamp
    */
  alert(JSON.stringify(position));
  /* use the position depending on the use case ,some of the use cases are listed below .    
    1. Get the nearby events(like ATMs, Restaurants …etc.)  based on the user current location
    2. In a tracking-based scenario ,use as an initial position of the user .
    */

  }

  function currentPositionFailureCallback(error) {
    alert(JSON.stringify(error));
  }

  function getCurrentPositionOfDevice () {
    var options = {};
    options.enableHighAccuracy = true; 
    options.timeout = 10000; // timeout in milli seconds      
   options.requireBackgroundAccess  = true; // gets the location updates in the background as well
    voltmx.location.getCurrentPosition(currentPositionSuccessCallback, currentPositionFailureCallback, options);
  }

 });