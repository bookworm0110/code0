var time;var min;var hr;var intrvl;
function ready() {
  // When everything is loaded, do something
  time = document.getElementById("1").value;
  document.getElementById("Timer").innerHTML = time;
  intrvl = setInterval(count, 1000);
  document.getElementById("Timer").disabled = true;
}

function count() {
  if (time > 0) {
    time--;
    min = Math.floor(time / 60);
    time = time % 60;
    hr = Math.floor(time / 3600);
    min = min % 60;
    document.getElementById("2").innerHTML =
      "Time Remaining: " + hr + "h, " + min + "m, " + time + "s";
  } else {
    document.getElementById("2").innerHTML = "Time Is Up.";
    clearInterval(intrvl);
    document.getElementById("Timer").disabled = false;
  }
}
// document.addEventListener("DOMContentLoaded", function(){
//     // When everything is loaded, do something

// });

// //Arrow function
// document.addEventListener("DOMContentLoaded", ()=>{
//     // When everything is loaded, do something

// });
