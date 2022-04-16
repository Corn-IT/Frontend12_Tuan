function Shape() {
  let x = document.getElementById("height").value;
  let result = "";
  if (x > 9) {
    document.getElementById("result").innerHTML =
      "Please enter your number height smaller!";
  } else if (x < 2) {
    document.getElementById("result").innerHTML =
      "Please enter your number height larger!";
  } else {
    for (let y = 0; y <= x; y++) {
      for (let k = y; k <= x; k++) {
        if (k == x) {
          result += k + "<br>";
        } else {
          result += k + "-";
        }
      }
    }
    document.getElementById("result").innerHTML = result;
  }
}