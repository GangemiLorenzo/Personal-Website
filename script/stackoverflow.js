const REQUEST = "https://api.stackexchange.com/2.2/users/6769331?order=desc&sort=reputation&site=stackoverflow";
const FORMAT = new Intl.NumberFormat('it-IT');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let me = JSON.parse(xhr.responseText).items[0];
        console.log(me);
        document.getElementById('so_rep').innerHTML = FORMAT.format(me.reputation);
        document.getElementById('so_rep_mobile').innerHTML = FORMAT.format(me.reputation);
        document.getElementById('so_gold').innerHTML = FORMAT.format(me.badge_counts.gold);
        document.getElementById('so_silver').innerHTML = FORMAT.format(me.badge_counts.silver);
        document.getElementById('so_bronze').innerHTML = FORMAT.format(me.badge_counts.bronze);
        document.getElementById('so_gold_mobile').innerHTML = FORMAT.format(me.badge_counts.gold);
        document.getElementById('so_silver_mobile').innerHTML = FORMAT.format(me.badge_counts.silver);
        document.getElementById('so_bronze_mobile').innerHTML = FORMAT.format(me.badge_counts.bronze);
    }
};
xhr.open('GET', REQUEST);
xhr.send();