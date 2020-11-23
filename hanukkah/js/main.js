let christmas = new Date("Dec 10 " + (new Date()).getFullYear());

const task = () => {
    let diff = new Date(christmas - Date.now());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("d").innerText = days.toString();
    document.getElementById("h").innerText = hours.toString();
    document.getElementById("m").innerText = minutes.toString();
    document.getElementById("s").innerText = seconds.toString();

}

// call on first tick
task.call();

// set to repeat every second
setInterval(task,1000);