
function handleRideChange() {

const rideType =
document.getElementById("rideType").value;

const cargoBox =
document.getElementById("cargoBox");

const tripBox =
document.getElementById("tripBox");

// hide first
cargoBox.style.display = "none";
tripBox.style.display = "none";

// show cargo
if (rideType === "Cargo Delivery") {
cargoBox.style.display = "block";
}

// show trip fields
if (
rideType === "Business Trip" ||
rideType === "Family Trip"
) {
tripBox.style.display = "block";
}

}

// ---------------- AUTO FILL MATERIAL ----------------

function fillMaterialType(){

const sensitivity =
document.getElementById("sensitivityType").value;

document.getElementById("materialType").value =
sensitivity;

}

// ---------------- FARE ----------------

function suggestFare() {

let rideType =
document.getElementById("rideType").value;

let fare = 0;

if (rideType === "Bike") {
fare = 200;
}

else if (rideType === "Mini Car") {
fare = 500;
}

else if (rideType === "Luxury Car") {
fare = 1500;
}

else if (rideType === "Cargo Delivery") {
fare = 2500;
}

else {
fare = 3500;
}

document.getElementById("fareResult").innerHTML =

`<div class="fare-box">
Estimated Fare: Rs ${fare}
</div>`;

}

// ---------------- CONFIRM RIDE ----------------

function confirmRide(event){

event.preventDefault();

const pickup =
document.getElementById("pickup").value;

const dropoff =
document.getElementById("dropoff").value;

const ride =
document.getElementById("rideType").value;

window.location.href =

`/ride-confirmed?pickup=${pickup}&dropoff=${dropoff}&ride=${ride}`;

}