//Canvas Element �ҷ�����
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

// ĵ������ ��ġ �� ũ�� ��������
var canvasRect = canvas.getBoundingClientRect();
var canvasX = canvasRect.left; // ĵ������ X ��ǥ
var canvasY = canvasRect.top; // ĵ������ Y ��ǥ
var mouseX = 0;
var mouseY = 0;
// ���콺 �̺�Ʈ ������ �߰�
canvas.addEventListener('mousemove', function (event) {
    // ���콺 �̺�Ʈ���� ���� ���콺 ��ġ ����
    mouseX = event.clientX - canvasX; // ĵ���� �� X ��ǥ
    mouseY = event.clientY - canvasY; // ĵ���� �� Y ��ǥ

});



var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"];

class circle {
    constructor(colorIndex, radius, positionX, positionY) {
        this.color = colors[colorIndex];
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
        this.speedX = Math.random() * 100; // X ���� �ӵ� (-1���� 1 ����)
        this.speedY = Math.random() * 100 ;

    } move() {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

     
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
        //2��
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX + this.radius * 2, this.positionY + this.radius * 2);
        ctx.scale(this.radius, this.radius);


        for (var i = 0; i < 360; i++) {

            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
        //1 �
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX, this.positionY + this.radius * 2);
        ctx.scale(this.radius, this.radius);

        ctx.lineTo(1, 1);


        for (var i = 0; i < 90; i++) {

            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
        //2�
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX + this.radius * 2, this.positionY + this.radius * 2);
        ctx.scale(this.radius, this.radius);
        ctx.rotate(1.57);
        ctx.lineTo(1, 1);


        for (var i = 0; i < 90; i++) {

            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
        //3�
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX + this.radius * 2, this.positionY + this.radius * 4);
        ctx.scale(this.radius, this.radius);
        ctx.rotate(3.14);
        ctx.lineTo(1, 1);


        for (var i = 0; i < 90; i++) {

            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
        //4�
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX, this.positionY + this.radius * 4);
        ctx.scale(this.radius, this.radius);
        ctx.rotate(4.71);
        ctx.moveTo(1, 1);

        for (var i = 0; i < 90; i++) {

            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
    }


}

var drawings = [];
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var a = Math.round(Math.random() * 6)
    var b = Math.random() * 2000;
    var c = Math.random() * 2000;
    var d = Math.random() * 100;//������
    
    



    var Circle = new circle(a, d, mouseX, mouseY);
    Circle.draw();
    drawings.push(Circle);
    console.log(drawings);
    drawings.forEach(function (circle) {
        circle.draw();
        circle.move();
    });
    if (drawings.length > 99) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawings = drawings.slice(-1);
    }



}
setInterval(render, 200);


