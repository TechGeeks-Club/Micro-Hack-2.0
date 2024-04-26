import { useEffect, useState } from "react";
// import "./NewHeroSection.css";




interface Coord {
  latitude:number, 
  longitude:number, 
  accuracy:number, 
}
function NewHeroSection() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const [WOW,setWOW] = useState<Coord | undefined  >(undefined); 
  const [BRUH,setBRUH] = useState<undefined | string>(undefined); 
  function success(pos:any) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    setWOW(pos.coords); 
  }

  function errors(err:any) {
    setBRUH(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
            //If denied then you have to show instructions to enable location
          }
          setBRUH(result.state)
        });
    } else {
      setBRUH("Geolocation is not supported by this browser.")
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return <div >
          {WOW ? (
            
        <div>
          <h1>Latitude: {WOW.latitude}</h1>
          <h1>Longitude: {WOW.longitude}</h1>
        </div>
      ) : (
        <h1>{BRUH}</h1>
      )}

      
     
  </div>;
}

export default NewHeroSection;
