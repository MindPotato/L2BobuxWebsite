function drop() {
    var x = document.getElementById("dropdownJS");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("body");
    if (y.style.overflow === "hidden") {
        y.style.overflow = "unset";
    } else {
        y.style.overflow = "hidden";
    }
}