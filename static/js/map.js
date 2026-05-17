function getLocation(){

const status =
document.getElementById("locationStatus");

status.innerHTML =
"Fetching your live location...";

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition);

}else{

status.innerHTML =
"Geolocation is not supported.";

}

}

async function showPosition(position){

const latitude = position.coords.latitude;
const longitude = position.coords.longitude;

document.getElementById("mapFrame").src =

`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

try{

const response = await fetch(

`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`

);

const data = await response.json();

const locationName =
data.display_name;

document.getElementById("pickup").value =
locationName;

document.getElementById("locationStatus")
.innerHTML =

"✅ Current Location Detected";

}

catch(error){

document.getElementById("pickup").value =
`${latitude}, ${longitude}`;

}

}