const backToHomePage = document.querySelector('#return');

document.addEventListener('DOMContentLoaded', draw);

backToHomePage.addEventListener('click', (e)=>{
    window.location.replace("../index.html");
})

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // background - sky
        ctx.fillStyle='#00FFFF';
        ctx.fillRect(0,0,700,600);
        ctx.fill();
        
        // background - ground
        ctx.fillStyle='#946846';
        ctx.fillRect(0,600,700,100);
        ctx.fillStyle='#000000';
        ctx.fillRect(100,600,500,20);   

        // house structure - first floor
        ctx.fillStyle='#ff4500';
        ctx.fillRect(100,400,500,200);   
        // house structure - roof
        ctx.beginPath();
        ctx.fillStyle='#909090';
        ctx.moveTo(80,400);
        ctx.lineTo(620,400);
        ctx.lineTo(580,280);
        ctx.lineTo(120,280);
        ctx.closePath();
        ctx.fill();
        // house structure - first floor entrance
        ctx.beginPath();
        ctx.fillStyle='#ff8c69';
        ctx.moveTo(350,600);
        ctx.lineTo(550,600);
        ctx.lineTo(550,300);
        ctx.lineTo(450,200);
        ctx.lineTo(350,300);
        ctx.closePath();
        ctx.fill();
        // house structure - lookout
        ctx.beginPath();
        ctx.moveTo(160,380);
        ctx.lineTo(280,380);
        ctx.lineTo(280,300);
        ctx.lineTo(220,250);
        ctx.lineTo(160,300);
        ctx.closePath();
        ctx.fill(); 
        // house structure - first floor entrance roof
        ctx.beginPath();
        ctx.fillStyle='black';
        ctx.moveTo(320,310);
        ctx.lineTo(450,190);
        ctx.lineTo(580,310);
        ctx.lineTo(570,320);
        ctx.lineTo(450,210);
        ctx.lineTo(330,320);
        ctx.closePath();
        ctx.fill();
        // house structure - lookout roof
        ctx.beginPath();
        ctx.fillStyle='black';
        ctx.moveTo(140,300);
        ctx.lineTo(220,230);
        ctx.lineTo(300,300);
        ctx.lineTo(290,310);
        ctx.lineTo(220,250);
        ctx.lineTo(150,310);
        ctx.closePath();
        ctx.fill();    

        // door
        ctx.beginPath();
        ctx.fillStyle='#b87700';
        ctx.moveTo(380,600);
        ctx.lineTo(480,600);
        ctx.lineTo(480,420);
        ctx.lineTo(380,420);
        ctx.fill();
        ctx.closePath();
        // door knob
        ctx.beginPath();
        ctx.fillStyle='#000000';
        ctx.moveTo(470, 530);
        ctx.arc(470, 530, 5, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath()

        // windows - lower left
        var x = 150;
        var y = 425;
        ctx.moveTo(x,y);
        ctx.fillStyle='#87cefa';
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                ctx.fillRect(x+i*75, y+j*75, 60, 60)
            }
        }
        // windows - top left
        var x = 172;
        var y = 220;
        ctx.moveTo(x,y);
        ctx.fillStyle='#87cefa';
        for (var i = 0; i < 2; i++) {
            ctx.fillRect(x+i*50, y+j*50, 45, 45)
        }
        // windows - top right
        var x = 375;
        var y = 120;
        ctx.moveTo(x,y);
        ctx.fillStyle='#87cefa';
        for (var i = 0; i < 2; i++) {
            ctx.fillRect(x+i*80, y+j*90, 70, 80)
        }

        // fence
        x=85
        y=520
        // fence - vertical part
        ctx.fillStyle='#A9A9A9';
        for (var j = 0; j < 11; j++) {
            if(j==6||j==7)
                continue;
            ctx.fillRect(x+j*50, y, 40, 100)
        }
        // fence - left horizontal part
        for (var j = 1; j < 3; j++) {
            ctx.fillRect(x-10, y+j*30, 310, 15)
        }
        // fence - right horizontal part
        for (var j = 1; j < 3; j++) {
            ctx.fillRect(x+390, y+j*30, 160, 15)
        }

        // sun
        ctx.fillStyle='#FFEF02';
        ctx.moveTo(570, 80);
        ctx.arc(570, 80, 60, 0, 2*Math.PI, false);
        ctx.fill();

        // text
        ctx.font = "30px Arial";
        ctx.fillText("Title: House", 20, 80);
        ctx.fillText("By Hanfeng Liu", 20, 120);
    }
}