let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')

let values = [
    '😢','🤭','👳','🧚','🥶','🚶','🧛‍♂️'
];

let animationId;

function getRandomValue() {
    return values[Math.floor(Math.random()*7)];
}

function updateAnimation(newSpeed) {
    if(animationId) clearInterval(animationId);

    animationId = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    },1000/newSpeed)
}

inpSpeed.onchange = (event) => {
    console.log("value changed",event.target.value)

    document.documentElement.style.setProperty('--speed',event.target.value);

    updateAnimation(event.target.value)
}