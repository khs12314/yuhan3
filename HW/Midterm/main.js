var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var my=0;
var mx=0;
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {


        my += 10;
        
       
    } if (event.key === 'ArrowUp') {


        my -= 10;
      
       
      
    }
    if (event.key === 'ArrowLeft') {

        mx -= 10;
      
    }
    if (event.key === 'ArrowRight') {

        mx += 10;

    }
    // ���ϴ� �ٸ� Ű�� ���� ó�� �߰�
});
// ��Ʈ �׸��� �Լ�
/*function drawHeart() {


    

    ctx.beginPath();
    

     x = canvas.width / 2;
     y = canvas.height / 2;
    const scale = 3;

    ctx.moveTo(x, y);

    // ���� �ݿ�
    ctx.bezierCurveTo(x, y - scale, x - 5 * scale, y - 5 * scale, x - 15 * scale, y - 5 * scale);

    // ���� �Ʒ� �κ�
    ctx.bezierCurveTo(x - 25 * scale, y - 5 * scale, x - 25 * scale, y + 5 * scale, x - 25 * scale, y + 5 * scale);

    // ������ �Ʒ� �κ�
    ctx.bezierCurveTo(x - 25 * scale, y + 15 * scale, x, y + 35 * scale, x, y + 35 * scale);

    // ������ �ݿ�
    ctx.bezierCurveTo(x, y + 35 * scale, x + 25 * scale, y + 15 * scale, x + 25 * scale, y + 5 * scale);

    // ������ ��� �κ�
    ctx.bezierCurveTo(x + 25 * scale, y + 5 * scale, x + 25 * scale, y - 5 * scale, x + 15 * scale, y - 5 * scale);

    // ������ �ݿ�
    ctx.bezierCurveTo(x + 5 * scale, y - 5 * scale, x, y - scale, x, y);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.lineWidth = 1; // �׵θ� ���� �β� ����
    ctx.strokeStyle = "black"; // �׵θ� ���� ���� ����
    ctx.stroke();
   
}*/
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

/*function drawRotatingHeart(rotationAngle) {

    centerX = canvas.width / 2 + mx;
    centerY = canvas.height / 2 + my;
    const scale = 10;

    

    ctx.save(); // ���� ĵ���� ���� ����

    // ȸ�� ��ȯ ���� (ĵ���� �߽��� �������� ȸ��)
    ctx.translate(centerX, centerY); // �߽��� ĵ���� �߽����� �̵�
    ctx.rotate(rotationAngle * Math.PI / 180); // ������ �������� ��ȯ�Ͽ� ȸ��
    ctx.translate(-centerX + mx, -centerY + my); // �ٽ� ���� ��ġ�� �̵�
   

    // ������ ��ġ�� ��Ʈ �׸���
    drawHeart(centerX, centerY, scale);

    ctx.restore();// ���� ĵ���� ���·� ����
}*/

// �ʱ� ȸ�� ���� ���� (0��)
let rotationAngle = 0;

// �� �����Ӹ��� ȸ�� ������ ������Ű�� �׸���


var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"];

   
/*function animate() {
    rotationAngle += 1; // ȸ�� ���� ���� (1����)
   
    drawRotatingHeart(rotationAngle);
  requestAnimationFrame(animate);
    star();
    
}
function render() {
    var ar = Math.round(Math.random() * 3)+1;
    var aarx;
    var aary;
    if (ar == 1) {
        
        var c = Math.random() * 800;
        var d = 0;
    }
    if (ar == 2) {
        
        var c = 0;
        var d = Math.random() * 900;
    }
    if (ar == 3) {
        
        var c = Math.random() * 800;
        var d = 900;
    }
    if (ar == 4) {

        var c = 600;
        var d = Math.random()*900;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var a = Math.round(Math.random() * 6)
    
   
    var Circle = new circle(a, 5, c, d);
    Circle.draw();
    drawings.push(Circle);
    
    drawings.forEach(function (circle) {
        circle.draw();
        circle.move();
    });

}*/
var speedx = 8;
var speedy = 12;
class circle {
    constructor(color, radius, posx, posy) {
        
        this.color = colors[color];
        this.radius = radius;
        this.positionX = posx;
        this.positionY = posy;
       
        
    }
    move() {
      
        if (this.positionX > centerX) {
            this.positionX -= speedx;
        }
        if (this.positionX < centerX) {
            this.positionX += speedx;
        }
        if (this.positionY > centerY) {
            this.positionY -= speedy;
        }
        if (this.positionY < centerY) {
            this.positionY += speedy;
        }
    }
    draw() {
        ctx.translate(this.area, this.area);
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX, this.positionY);
        ctx.scale(this.radius, this.radius);
        for (var i = 0; i < 360; i++) {
            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
        }
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        console.log(this.positionX, this.positionY);
        
    }
   
}
 
var drawings1 = [];

function render() {

    var arran = Math.round(Math.random() * 3) + 1;
    if (arran == 1) {
        var c = Math.random() * 800;
        var d = 0;
    }
    if (arran == 2) {
        var c = 0;
        var d = Math.random() * 900;
    }
    if (arran == 3) {
        var c = Math.random() * 800;
        var d = 900;
    }
    if (arran == 4) {
        var c = 600;
        var d = Math.random() * 900;
    }

 
    var a = Math.round(Math.random() * 6)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    var Circle = new circle(a, 5, c, d);
    Circle.draw();
    drawings1.push(Circle);
    star();
    drawings1.forEach(function (circle) {
        circle.draw();
        circle.move();
    });
   
}
setInterval(render, 100);


var randomx = Math.random()*200;
var randomy = Math.random()*300;
function star() {
    
  
    
    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);

   
    
    
     
    for (var i = 0; i < 360; i++) {
        if (i % 60 == 0) {
            ctx.scale(50, 50); 
            ctx.lineTo(Math.cos(Math.PI / 180 * (i - 30)), Math.sin(Math.PI / 180 * (i - 30)));
            console.log(Math.cos(Math.PI / 180 * (i - 30), Math.sin(Math.PI / 180 * (i - 30))));
            ctx.scale(1 / 50, 1 / 50);
            ctx.scale(25, 25);
            ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));
            ctx.scale(1 / 25, 1 / 25);
           
        }
    }

   
   
    
    
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fill();

    ctx.closePath();
    
    ctx.restore();
    
 
}




