
//color changing when explore is clicked 
const btn = document.querySelector(".changer1");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});





/*getting my location 
let locateME = document.querySelector(".see_location");

locateME.geoLocation.getCurrentPosition( (pos) => {
  console.log( "latitude:" + pos.coords.latitude + "\nlongitude:" + pos.coords.longitude);
})  
*/
