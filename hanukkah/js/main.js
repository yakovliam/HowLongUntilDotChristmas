let hanukkah = new Date("Dec 10 " + (new Date()).getFullYear());

const task = () => {
    let diff = new Date(hanukkah - Date.now());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("d").innerText = days.toString();
    document.getElementById("dt").innerText = "Day" + (days === 1 ? "" : "s");

    document.getElementById("h").innerText = hours.toString();
    document.getElementById("ht").innerText = "Hour" + (hours === 1 ? "" : "s");

    document.getElementById("m").innerText = minutes.toString();
    document.getElementById("mt").innerText = "Min" + (minutes === 1 ? "" : "s");

    document.getElementById("s").innerText = seconds.toString();
    document.getElementById("st").innerText = "Sec" + (seconds === 1 ? "" : "s");
}

// call on first tick
task.call();

// set to repeat every second
setInterval(task,1000);