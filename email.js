(function () {
    var addr = ["hi", "siklr.io"].join("@");
    var link = document.createElement("a");
    link.href = "mailto:" + addr;
    link.textContent = addr;
    document.getElementById("email").replaceWith(link);
})();
