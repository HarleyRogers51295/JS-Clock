//select the clock hands
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


//create a function to set the time
function setDate() {
    //call the Date class
    const now = new Date();

    //seconds section--
    //get the seconds by using the getSeconds method
    const seconds = now.getSeconds();
    //apply the seconds to degrees for the clock hand
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //add some style with JS
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    

    //mins section--
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //hour section
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);