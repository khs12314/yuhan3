// JavaScript source code
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2 - 100;
var y = canvas.height / 2 + 100;
var width = 200;
var height = 100;
var color = "gray";
function btn() {
    ctx.beginPath();
    ctx.fillStyle = color;

    ctx.fillRect(x, y, 200, 100);
    ctx.font = 50 + 'px Arial';
    ctx.fillStyle = "black";
    ctx.fillText("start", canvas.width / 2 - 50, canvas.height / 2 + 165);
    ctx.lineWidth = 1; // 테두리 선의 두께 설정
    ctx.strokeStyle = "black"; // 테두리 선의 색상 설정
    ctx.stroke();
}
canvas.addEventListener('mousemove', function (event) {
    // 마우스 커서의 현재 위치
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    // 사각형 내에 있는지 확인
    if (mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height) {
        color = "purple";
        console.log('x');
        console.log(color);
    } else {
        color = "gray";
        console.log('y');
    }
});
canvas.addEventListener('click', function (event) {
    // 클릭한 위치
    var clickX = event.offsetX;
    var clickY = event.offsetY;

    // 사각형 안에 있는지 확인
    if (clickX >= x && clickX <= x + width && clickY >= y && clickY <= y + height) {
        // main.html로 이동
        color = "blue";
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 1000);
    }
});
setInterval(btn, 20);