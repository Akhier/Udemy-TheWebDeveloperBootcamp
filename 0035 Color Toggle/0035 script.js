var white = true;
document.querySelector("button").addEventListener(
  "click", function(){
    if (white) {
      document.body.style.backgroundColor = "purple";
    } else {
      document.body.style.backgroundColor = "white";
    }
    white = !white;
});