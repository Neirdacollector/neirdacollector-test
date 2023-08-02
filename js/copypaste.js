// --- Empêcher le Clic Droit --- //

$(document).ready(function () {
  $("body").on("contextmenu", function (e) {
    return false;
  });
});

// --- Empêcher le Copier/Coller --- //

$(document).ready(function () {
  $("body").bind("cut copy", function (e) {
    e.preventDefault();
  });
});
