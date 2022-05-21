const button = document.querySelector("#button");
const backToHomePage = document.querySelector("#return");
backToHomePage.addEventListener("click", (e) => {
  window.location.replace("../index.html");
});

var canvas = document.getElementById("canvas");
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");

  ctx.font = "30px Arial";
  ctx.fillText("Sound Effect Machine", 65, 60);
  ctx.font = "20px Arial";
  ctx.fillText("Click the following button to make sound", 65, 90);

  ctx.fillStyle = "white";
  ctx.fillRect(70, 120, 360, 300);
  ctx.fill();
}
