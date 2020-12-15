// 25th day of "Kislev"

// get hannukah date (using REST)

async function task() {

    // Hebrew year
    const thisHebrewYear = (await getData('https://www.hebcal.com/converter?cfg=json&gy=' + new Date().getFullYear() + '&gm=6&gd=2&g2h=1')).hy;

    /**
     * Get gregorian date of Hanukkah THIS year
     */
    let thisHanukkahGreg = (await getData('https://www.hebcal.com/converter?cfg=json&hy=' + thisHebrewYear + '&hm=Kislev&hd=25&h2g=1'));

    // create date with hanukkah date
    let hanukkah = new Date(thisHanukkahGreg.gy, thisHanukkahGreg.gm, thisHanukkahGreg.gd);

    // calculate difference
    let diff = new Date(hanukkah.getTime() - Date.now());

    if (diff <= 0) {
        // get NEW hanukkah date
        thisHanukkahGreg = (await getData('https://www.hebcal.com/converter?cfg=json&hy=' + (thisHebrewYear + 1) + '&hm=Kislev&hd=25&h2g=1'));
        hanukkah = new Date(thisHanukkahGreg.gy, thisHanukkahGreg.gm, thisHanukkahGreg.gd);
    }

    // run repeat

    // call on first tick
    repeat(hanukkah);

    // set to repeat every second
    setInterval(function () {
        repeat(hanukkah);
    }, 1000);
}

async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function repeat(hanukkah) {
    let diff = hanukkah.getTime() - Date.now();

    // year diff
    let yearDiff = hanukkah.getFullYear() - new Date(Date.now()).getFullYear()

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + (yearDiff * 365);
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

task();
