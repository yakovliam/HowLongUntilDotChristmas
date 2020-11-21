// Set the date we're counting down to
const countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();

const countTask = () => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let countdown = document.getElementById("countdown");
    countdown.innerHTML = "";

    // Create separate elements

    /* DAYS */
    let daysNum = document.createElement("div");
    daysNum.setAttribute("class", "countdown-num");
    daysNum.innerText = days;

    let daysTxt = document.createElement("div");
    daysTxt.setAttribute("class", "countdown-txt");
    daysTxt.innerHTML = " Days, "

    // ------------------------------------------------------------
    /* HOURS */
    let hoursNum = document.createElement("div");
    hoursNum.setAttribute("class", "countdown-num");
    hoursNum.innerText = hours;

    let hoursTxt = document.createElement("div");
    hoursTxt.setAttribute("class", "countdown-txt");
    hoursTxt.innerHTML = " Hours, "

    // ------------------------------------------------------------
    /* MINUTES */
    let minutesNum = document.createElement("div");
    minutesNum.setAttribute("class", "countdown-num");
    minutesNum.innerText = minutes;

    let minutesTxt = document.createElement("div");
    minutesTxt.setAttribute("class", "countdown-txt");
    minutesTxt.innerHTML = " Minutes, "


    // ------------------------------------------------------------
    /* SECONDS */
    let secondsNum = document.createElement("div");
    secondsNum.setAttribute("class", "countdown-num");
    secondsNum.innerText = seconds;

    let secondsTxt = document.createElement("div");
    secondsTxt.setAttribute("class", "countdown-txt");
    secondsTxt.innerHTML = " Seconds"

    // ------------------------------------------------------------

    // Append all to wrapper
    countdown.appendChild(daysNum);
    countdown.appendChild(daysTxt);

    countdown.appendChild(hoursNum);
    countdown.appendChild(hoursTxt);

    countdown.appendChild(minutesNum);
    countdown.appendChild(minutesTxt);

    countdown.appendChild(secondsNum);
    countdown.appendChild(secondsTxt);


    // Apply inline block to ALL children
    const children = countdown.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.setAttribute("style", "display: inline-block;")
    }

    // Display the result in the element with id="demo"
    // document.getElementById("countdown").innerHTML = days + daysTxt.innerHTML + hours + " Hours, "
    //         + minutes + " Minutes, " + seconds + " Seconds";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "No elements of time";
    }
}

// Update the count down every 1 second
const x = setInterval(countTask, 1000);
