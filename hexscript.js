const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeColour() {
  let hex = "#";
  for (i = 0; i < 6; i++) {
    hex += hexArray[randomPosition()];
  }
  console.log(hex);
  document.getElementById("background").style.backgroundColor = hex;
  document.getElementById("hexText").innerHTML = hex;
}
function randomPosition() {
  return Math.floor(Math.random() * hexArray.length);
}
