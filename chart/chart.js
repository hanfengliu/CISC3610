const backToHomePage = document.querySelector('#return');

document.addEventListener('DOMContentLoaded', draw);

backToHomePage.addEventListener('click', (e)=>{
    window.location.replace("../index.html");
})

var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
	{name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"},
];

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        for(var i=0;i<fruit.length;i++){
            ctx.fillStyle=fruit[i].color;
            ctx.fillRect(i*110,700-fruit[i].quantity*30,110,fruit[i].quantity*30);
            ctx.fill();
        };

        ctx.fillStyle = "black";
        for(var i=0;i<fruit.length;i++){
            ctx.fillText(fruit[i].quantity, i*110+55, 650);
            ctx.fillText(fruit[i].name, i*110+55, 680);
        }
    }
}

