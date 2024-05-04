var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"];
var movex = 0;
var movey = 0;
var colA = _xpos - xpos;
var colB = _ypos - ypos;
var _colA = colA * colA;
var _colB = colB * colB;
var col = Math.sqrt(_colA + _colB);
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {

        ypos += 1;
        
        colA = _xpos - xpos;
        colB = _ypos - ypos;
        _colA = colA * colA;
        _colB = colB * colB;
        col = Math.sqrt(_colA + _colB);
        console.log(col);
    } if (event.key === 'ArrowUp') {


        ypos -= 1;
       
        colA = _xpos - xpos;
        colB = _ypos - ypos;
        _colA = colA * colA;
        _colB = colB * colB;
        col = Math.sqrt(_colA + _colB);
        console.log(col);
    }
    if (event.key === 'ArrowLeft') {

        xpos -= 1;
       
        colA = _xpos - xpos;
        colB = _ypos - ypos;
        _colA = colA * colA;
        _colB = colB * colB;
        col = Math.sqrt(_colA + _colB);
        console.log(col);
    }
    if (event.key === 'ArrowRight') {

        xpos += 1;
        console.log("x:", colA);
        console.log("y", colB);
        colA = _xpos - xpos;
        colB = _ypos - ypos;
        _colA = colA * colA;
        _colB = colB * colB;
        col = Math.sqrt(_colA + _colB);
        console.log(col);
    }
    // 원하는 다른 키에 대한 처리 추가
});
class circle {
    constructor(color, radius, positionX, positionY) {
        this.color = colors[color];
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
       
        ctx.translate(this.positionX, this.positionY + this.radius * 2);
        ctx.scale(this.radius, this.radius);

        for (var i = 0; i < 360; i++) {

            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
       
    }
    move() {

    }
}
var a = Math.round(Math.random() * 6);
var b = Math.round(Math.random() * 6);
var c = 50;
var d = 50;
var xpos = 200;
var ypos = 200;
var _xpos = 400;
var _ypos = 400;

function drawb() {
    ctx.save()
    ctx.beginPath();
    ctx.lineTo(300, 300);
    ctx.lineTo(300, 400);
    ctx.lineTo(400, 400);
    ctx.lineTo(400, 300);

    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var Circle = new circle(a, c, xpos, ypos);
    Circle.draw();
    var Circle = new circle(b, c, _xpos, _ypos);
    Circle.draw();
    drawb();
    if (col <= 101) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
}
setInterval(render);
