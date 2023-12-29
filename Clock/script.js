"use strict";

const secondPointer = document.getElementById("second");
const minutePointer = document.getElementById("minute");
const hourPointer = document.getElementById("hour");

const secondText = document.getElementById("d__second");
const minuteText = document.getElementById("d__minute");
const hourText = document.getElementById("d__hour");

const clock_audio = document.getElementById("clock");


const clock = () => {
    const time = new Date()

    hourText.innerText = String(time.getHours()).padStart(2, '0')
    minuteText.innerText = String(time.getMinutes()).padStart(2, '0')
    secondText.innerText = String(time.getSeconds()).padStart(2, '0')

    hourPointer.style.transform = `rotate(${
        (time.getHours() % 12) * 30 + time.getMinutes() / 2
    }deg)`

    minutePointer.style.transform = `rotate(${
        (time.getMinutes() * 6)
    }deg)`

    secondPointer.style.transform = `rotate(${
        (time.getSeconds() * 6)
    }deg)`

        clock_audio.play()

}
setInterval(clock, 1000)

