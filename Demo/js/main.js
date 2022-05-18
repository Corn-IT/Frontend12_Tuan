//JS Custom Color
var colorWell;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("div").forEach(function (p) {
    p.style.color = event.target.value;
  });
}

//JS Zoom Font Size
$(function () {
  $("#increase").click(function () {
    $("div")
      .children()
      .each(function () {
        var size = parseInt($(this).css("font-size"));
        size = size + 1 + "px";
        $(this).css({
          "font-size": size,
        });
      });
  });
});
$(function () {
  $("#decrease").click(function () {
    $("div")
      .children()
      .each(function () {
        var size = parseInt($(this).css("font-size"));
        size = size - 1 + "px";
        $(this).css({
          "font-size": size,
        });
      });
  });
});

//JS Dark Mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}