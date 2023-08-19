function trafficLight() {
  let blockRed = document.querySelector(".block-red");
  let blockYellow = document.querySelector(".block-yellow");
  let blockGreen = document.querySelector(".block-green");

  function blockRed() {
    blockRed.style.backgroundColor = "red";
    blockYellow.style.backgroundColor = "rgb(131,131,2)";
    blockGreen.style.backgroundColor = "green";

    setTimeout(blockYellow, 2000);
  }

  function blockYellow() {
    blockRed.style.backgroundColor = "rgb(118,3,3)";
    blockYellow.style.backgroundColor = "yellow";
    blockGreen.style.backgroundColor = "green";
    setTimeout(blockGreen, 2000);
  }

  function blockGreen() {
    blockRed.style.backgroundColor = "rgb(118,3,3)";
    blockYellow.style.backgroundColor = "rgb(131,131,2)";
    blockGreen.style.backgroundColor = "greenYellow";
    setTimeout(blockRed, 2000);
  }
  blockRed();
}
trafficLight();
