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
    ctx.lineWidth = 1; // �׵θ� ���� �β� ����
    ctx.strokeStyle = "black"; // �׵θ� ���� ���� ����
    ctx.stroke();
}
canvas.addEventListener('mousemove', function (event) {
    // ���콺 Ŀ���� ���� ��ġ
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    // �簢�� ���� �ִ��� Ȯ��
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
    // Ŭ���� ��ġ
    var clickX = event.offsetX;
    var clickY = event.offsetY;

    // �簢�� �ȿ� �ִ��� Ȯ��
    if (clickX >= x && clickX <= x + width && clickY >= y && clickY <= y + height) {
        // main.html�� �̵�
        color = "blue";
        setTimeout(function () {
            window.location.href = 'main.html';
        }, 1000);
    }
});
setInterval(btn, 20);