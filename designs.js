// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let activeColor;

function makeGrid() {
  let height = $("#input_height").val();
  let width = $("#input_width").val();
  $("table").empty();

  for (let i = 1; i <= height; i++) {
    $("table").append(`<tr id='row${i}'></tr>`);
    for (let j = 1; j <= width; j++) {
      let colNum = $(`#row${i}`);
      colNum.append(`<td id='r${i}c${j}'></td>`);
    }
  }
}

$("#submit").on("click", function(event) {
  activeColor = document.getElementById("colorPicker").value;
  event.preventDefault();
  makeGrid();
});

$("table").on("click", "td", function(event) {
  activeColor = document.getElementById("colorPicker").value;
  $(this).css("background-color", activeColor);
});
