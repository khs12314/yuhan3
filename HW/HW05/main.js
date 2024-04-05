// JavaScript source code
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

drawSun();
drawEarth();
//drawEarthCheck();

drawMoon();
//setInterval(draw, 1000.0/60.0)
var EarthRotate = 0;
var Earthrevolution = 0;
var MoonRotate = 0;
var Moonrevolution = 0;
var SunRotate = 0;
var MoonRotate = 0;
var MOonrevolution = 0;

function drawSun() {
    SunRotate += Math.PI / 100;
    
    
    ctx.save();
    ctx.fillStyle = "orange";
    ctx.translate(canvas.width / 2, canvas.height/2);
    ctx.clearRect(-canvas.width / 2.0, -canvas.height / 2.0, canvas.width, canvas.height);
    
    ctx.rotate(SunRotate);
    ctx.translate(-50, -50);
    ctx.fillRect(0, 0, 100, 100);
    ctx.restore();
    requestAnimationFrame(drawSun);
}
function drawEarth() {
    EarthRotate += Math.PI / 200;
    Earthrevolution += Math.PI / 100;
    ctx.save();
    ctx.fillStyle = "blue";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Earthrevolution);
    ctx.translate(500,500);
    
    ctx.rotate(EarthRotate);
    ctx.fillRect(-50, -50, 100, 100);
    
    
    ctx.restore();
    requestAnimationFrame(drawEarth);
    
}
/*function drawEarthCheck() {// 지구의 자전을 확인하기 위한 코드 지구와 같은 좌표로 만들고 자전 회전을 없애 둘의 차이를 보여주어 좀 더 확인하기 편하게 만듦
    
    ctx.save();
    ctx.fillStyle = "green";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Earthrevolution);
    ctx.translate(500, 500);
    

    ctx.fillRect(-50, -50, 100, 100);


    ctx.restore();
    requestAnimationFrame(drawEarthCheck);

}*/
function drawMoon() {

    MoonRotate += Math.PI / 80;
    Moonrevolution += Math.PI / 100;
    ctx.save();
    ctx.fillStyle = "gray";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Moonrevolution);
    ctx.translate(500, 500);
    ctx.rotate(Moonrevolution);
    ctx.translate(200, 200);
    ctx.rotate(MoonRotate);
    ctx.fillRect(-25, -25, 50, 50);
    ctx.restore();
    requestAnimationFrame(drawMoon);
    

}