var ReleaseDate = new Date("Aug 9, 2020 17:00:00").getTime();
var TimerFunction = setInterval(function() {
    var DatumHeute = new Date().getTime();
    var Differenz = ReleaseDate - DatumHeute;

    var d = Math.floor(Differenz / (1000 * 60 * 60 * 24));
    var h = Math.floor((Differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((Differenz % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((Differenz % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        "<span>" +
        d +
        "<br><br><i>Tage</i></span><span>" +
        h +
        "<br><br><i>Stunden</i></span><span>" +
        m +
        "<br><br><i>Minuten</i></span><span>" +
        s +
        "<br><br><i>Sekunden</i></span>";

    if (Differenz < 0) {
        clearInterval(TimerFunction);
        document.getElementById("timer").innerHTML = "Abgelaufen";
    }
}, 1000);
