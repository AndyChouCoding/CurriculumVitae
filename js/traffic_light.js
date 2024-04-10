function switchLight() {
  const redLight = document.getElementById("red_light");
  const yellowLight = document.getElementById("yellow_light");
  const greenLight = document.getElementById("green_light");
  const timerDisplay = document.getElementById("timer");

  function resetLights() {
    redLight.style.backgroundColor = "grey";
    yellowLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";
  }

  function updateTimer(seconds,color) {
    let count = seconds;
    timerDisplay.textContent = count;
    count--;
    timerDisplay.style.color = color;
    const interval = setInterval(() => {
      if (count < 1) {
        clearInterval(interval);
        timerDisplay.textContent = "";
      } else {
        timerDisplay.textContent = count;
        timerDisplay.style.color = color;
      }
      count--;
    }, 1000);
  }

  function turnOnRed() {
    resetLights();
    redLight.style.backgroundColor = "red";
    updateTimer(5 , "red");
    setTimeout(turnOnGreen, 5000);
  }

  function turnOnGreen() {
    resetLights();
    greenLight.style.backgroundColor = "green";
    updateTimer(5 , "green");
    setTimeout(turnOnYellow, 5000);
  }

  function turnOnYellow() {
    resetLights();
    yellowLight.style.backgroundColor = "yellow";
    updateTimer(3 , "yellow");
    setTimeout(turnOnRed, 3000);
  }

  turnOnRed();
}

switchLight();
