function drop() {
    var x = document.getElementById("nav");
    if (x.classList.contains('mobile')) {
        x.classList.remove('mobile');
    } else {
        x.classList.add('mobile');
    }
    var y = document.getElementById("body");
    if (y.style.overflow === "hidden") {
        y.style.overflow = "unset";
    } else {
        y.style.overflow = "hidden";
    }
    var z = document.getElementById("icon");
    if (z.classList.contains('open')) {
        z.classList.remove('open');
    } else {
        z.classList.add('open');
    }
}