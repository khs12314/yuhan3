var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var movex = 0;
var movey = 0;
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
       
      
        ya += 10;
        yb += 10;
        movey += 10;
        console.log("xb:", xb);
        console.log("yb:", yb);
    } if (event.key === 'ArrowUp') {
  
        
        ya -= 10;
        yb -= 10;
        movey -= 10;
        console.log("xb:", xb);
        console.log("yb:", yb);
    }
    if (event.key === 'ArrowLeft') {
       
        xa -= 10;
        xb -= 10;
        movex -= 10;
        console.log("xb:", xb);
        console.log("yb:", yb);
    }
    if (event.key === 'ArrowRight') {
    
        xa += 10;
        xb += 10;
        movex += 10;
        console.log("xb:", xb);
        console.log("yb:", yb);
    }
    // 원하는 다른 키에 대한 처리 추가
});
var movex = 0;
var movey = 0;
var xa = 0;
var ya = 100;
var xb = 100;
var yb = 0;
var _xa = 200;
var _ya = 300;
var _xb = 300;
var _yb = 200;

drawa();


function drawa() {

    ctx.save()
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineTo(0 + movex, 0 + movey);
    ctx.lineTo(xa, ya);
    ctx.lineTo(100 + movex, 100 + movey);
    ctx.lineTo(xb, yb);
   
    ctx.fillStyle = "red";
    ctx.fill();
    
    ctx.closePath();
    ctx.restore();
    drawb();
    drawc();
    setInterval(drawa);
} function drawb() {
    ctx.save()
    ctx.beginPath();
    ctx.lineTo(200, 200);
    ctx.lineTo(_xa, _ya);
    ctx.lineTo(300, 300);
    ctx.lineTo(_xb, _yb);

    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
function drawc(){

    if ((xb > _xa) && (ya > _yb) && (xa < _xb) && (yb < _ya)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save()
        ctx.beginPath();
        ctx.lineTo(100, 100);
        ctx.lineTo(100, 500);
        ctx.lineTo(500, 500);
        ctx.lineTo(500, 100);
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.restore();
    }
    
}
