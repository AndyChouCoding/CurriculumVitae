function switchLight () {
    const redLight = document.getElementById('red_light');
    const yellowLight = document.getElementById('yellow_light');
    const greenLight = document.getElementById('green_light');

    function resetLights(){
        redLight.style.backgroundColor = "grey";
        yellowLight.style.backgroundColor = "grey";
        greenLight.style.backgroundColor = "grey";
    };

    function turnOnRed () {
        resetLights();
        redLight.style.backgroundColor = "red";
        setTimeout(turnOnGreen,5000);
    };

    function turnOnGreen () {
        resetLights();
        greenLight.style.backgroundColor = "green";
        setTimeout(turnOnYellow,5000);
    };

    function turnOnYellow () {
        resetLights();
        yellowLight.style.backgroundColor = "yellow";
        setTimeout(turnOnRed,3000);
    };
    turnOnRed();
};

switchLight();

