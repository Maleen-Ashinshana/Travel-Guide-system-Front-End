var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile = function (event) {
    var image = document.getElementById("guide-output");
    image.src = URL.createObjectURL(event.target.files[0]);
};
