function checkAge() {
    let inputAge = document.querySelector("#age").valueAsNumber;
    let outputCheckResult = document.querySelector(".checkResult");
    if (inputAge < 18) {
        outputCheckResult.innerText = `Under: 18`;
    } else if (inputAge >= 18) {
        outputCheckResult.innerText = `Over: 18`;
    }
}

function checkWeather() {
    let inputWeatherNum = document.querySelector("#weatherInNum").valueAsNumber
    let outputWeatherRes = document.querySelector(".weatherRes")
    if (inputWeatherNum >= 8) {
        outputWeatherRes.innerText = `super`
    } else if (inputWeatherNum >= 6) {
        outputWeatherRes.innerText = `gut`
    } else if (inputWeatherNum >= 3) {
        outputWeatherRes.innerText = `okay`
    } else if (inputWeatherNum >= 0) {
        outputWeatherRes.innerText = `schlecht`
    }
}

function checkShishaAge() {
    event.preventDefault();
    let inputShishaAge = document.querySelector("#shishaAge").valueAsNumber
    let outputDürfen = document.querySelector(".dürfen");
    if (inputShishaAge >= 18) {
        outputDürfen.innerText = `Ja, du darfst Shisha rauchen :D`;
    } else if (inputShishaAge < 18) {
        outputDürfen.innerText = `Nein, du darfst keine Shisha rauchen`
    }
}

function AirQuality() {
    let rangeAir = document.querySelector("#Air").valueAsNumber
    let outputHealthLevel = document.querySelector(".HealthLevel")
    let outputHealthEffect = document.querySelector(".HealthEffect")
    let backgroundArticle = document.querySelector(".AirColor")
    if (rangeAir < 50) {
        outputHealthLevel.innerText = `Level of health concern: Good`;
        outputHealthEffect.innerText = `Level of health effect: Little or no risk`;
        backgroundArticle.style.backgroundColor = "green";
    } else if (rangeAir < 100) {
        outputHealthLevel.innerText = `Level of health concern: moderate`;
        outputHealthEffect.innerText = `Level of health effect: Acceptable quality`;
        backgroundArticle.style.backgroundColor = "yellow";
    } else if (rangeAir < 150){
        outputHealthLevel.innerText = `Level of health concern: Unhealthy for sesitive group`;
        outputHealthEffect.innerText = `Level of health effect: Generable publics not likely affected`;backgroundArticle.style.backgroundColor = "orange";
    }
}

