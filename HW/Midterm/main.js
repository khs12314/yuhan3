var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var my = 0;
var mx = 0;
var HP = 3;
var xcount = 0;
var ycount = 0;
var starcount = 0;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var attck = false;
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is the spacebar
    if (event.code === 'Space') {
        scale = 2.5;
        attck = true;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {


        my = -1;

        console.log(centerY);
        ycount += my;

    } if (event.key === 'ArrowUp') {


        my = +1;
     
        ycount += my;


    }
    if (event.key === 'ArrowLeft') {

        mx = +1;
     
        xcount += mx;
    }
    if (event.key === 'ArrowRight') {

        mx = -1;
      
        xcount += mx;
    }
    // ���ϴ� �ٸ� Ű�� ���� ó�� �߰�
});
document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowDown') {


        my = 0;


    } if (event.key === 'ArrowUp') {


        my = 0;



    }
    if (event.key === 'ArrowLeft') {

        mx = 0;

    }
    if (event.key === 'ArrowRight') {

        mx = 0;

    }
    // ���ϴ� �ٸ� Ű�� ���� ó�� �߰�
});
var scale = 1.5;
// ��Ʈ �׸��� �Լ�
function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();

    // Move the canvas origin to the center
    ctx.translate(canvas.width / 2, canvas.height / 2);

    for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        if (t === 0) {
            ctx.moveTo(x * 4, -y * 4); // Scale and flip the y-coordinate
        } else {
            ctx.lineTo(x * 4, -y * 4); // Scale and flip the y-coordinate
        }
    }

    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
}

function drawRotatingHeart(rotationAngle) {

 
    const scale = 10;

   

    ctx.save(); // ���� ĵ���� ���� ����

    // ȸ�� ��ȯ ���� (ĵ���� �߽��� �������� ȸ��)
    ctx.translate(300, 400); // �߽��� ĵ���� �߽����� �̵�
    ctx.rotate(rotationAngle * Math.PI / 180); // ������ �������� ��ȯ�Ͽ� ȸ��
    ctx.translate(-300, -400); // �ٽ� ���� ��ġ�� �̵�
 

    // ������ ��ġ�� ��Ʈ �׸���
    drawHeart(centerX , centerY, scale);

    ctx.restore();// ���� ĵ���� ���·� ����
}

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

var starcolx;
var starcoly;
var starcol;
class circle {
    constructor(color, radius, posx, posy, colbool,count) {

        this.color = colors[color];
        this.radius = radius;
        this.positionX = posx + xcount;
        this.positionY = posy + ycount;
        this.colA = (centerX - this.positionX) * (centerX - this.positionX);
        this.colB = (centerY - this.positionY) * (centerY - this.positionY);
       
        this.speedx = 0;
        this.speedy = 0;
        

        this.colider = Math.sqrt(this.colA + this.colB);
        this.colbool = colbool;
        this.count = count;
    }
    recircle() {
        
            if ((this.positionX < -10) || (this.positionX > 850) || (this.positionY > 950) || (this.positionY < -10)) {
                return true;
            
        }
    }
    coliderfnc() {

        this.colA = (300 - this.positionX) * (300 - this.positionX);
        this.colB = (400 - this.positionY) * (400 - this.positionY);
        
        this.colider = Math.sqrt(this.colA + this.colB);
        if (this.colider <= 55) {
            this.colbool = true;
            console.log(this.colider);
            return this.colbool;
        }
       
        
    }
   
    move() {

        if (this.positionX > 300) {
            this.speedx = (300 - this.positionX + xcount) / 500;
           
        }
        if (this.positionX < 300) {
            this.speedx = (300 - this.positionX + xcount) / 500;
        
        }
        if (this.positionY > 400) {
            this.speedy = (400 - this.positionY + ycount) / 500;
        
        }
        if (this.positionY < 400) {
            this.speedy = (400 - this.positionY + ycount) / 500;
            
        }
     

    }
    moves() {
        this.positionX += this.speedx + (mx*2);
        this.positionY += this.speedy + (my*2);
    }
    rerending() {
        var arran = Math.round(Math.random() * 3) + 1;
        if (arran == 1) {
            this.positionX = Math.random() * 800;
            this.positionY = 0;
        }
        if (arran == 2) {
            this.positionX = 0;
            this.positionY = Math.random() * 900;
        }
        if (arran == 3) {
            this.positionX = Math.random() * 800;
            this.positionY = 900;
        }
        if (arran == 4) {
            this.positionX = 600;
            this.positionY = Math.random() * 900;
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


    }

}

var drawings1 = [];
class Queue {
    constructor() {
        this.items = [];
    }

    // ť�� ��Ҹ� �߰��մϴ�.
    enqueue(element) {
        this.items.push(element);
    }

    // ť���� ù ��° ��Ҹ� �����ϰ� ��ȯ�մϴ�.
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // ť�� ù ��° ��Ҹ� ��ȯ�մϴ�.
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // ť�� ��� �ִ��� Ȯ���մϴ�.
    isEmpty() {
        return this.items.length === 0;
    }

    // ť�� ũ�⸦ ��ȯ�մϴ�.
    size() {
        return this.items.length;
    }

    // ť�� ��ҵ��� ����մϴ�.
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }

    // ť�� �� ��ҿ� ���� �־��� �Լ��� �����մϴ�.
    forEach(callback) {
        this.items.forEach(callback);
    }
    removeByCount(count) {
        this.items = this.items.filter(circle => circle.count !== count);
    }
    enqueueByCount(count, element) {
        this.items.splice(count, 0, element);
    }
}
function death() {
    if (HP == 0) {
        window.location.href = 'death.html';
    }
}
var NumP = 10;
var studentID = 202127067;
function drawNum(num) {
    
    var NumP = 10, cntnum = 0;
    var numStr = num.toString(); 
    var length = numStr.length;
    var startX = (length - 1) * 50;
    for (var i = length - 1; i >= 0; i--) {
        cntnum = parseInt(numStr[i]);

        if (cntnum == 1) {
            drawNum1(startX);
        }
        else if (cntnum == 2) {
            drawNum2(startX);
        }
        else if (cntnum == 3) {
            drawNum3(startX);
        }
        else if (cntnum == 4) {
            drawNum4(startX);
        }
        else if (cntnum == 5) {
            drawNum5(startX);
        }
        else if (cntnum == 6) {
            drawNum6(startX);
        }
        else if (cntnum == 7) {
            drawNum7(startX);
        }
        else if (cntnum == 8) {
            drawNum8(startX);
        }
        else if (cntnum == 9) {
            drawNum9(startX);
        }
        else if (cntnum == 0) {
            drawNum0(startX);
        }


        startX -= 50;//-50�� ���� �� ���ڴ� 50�� ������ �Ҵ�

    }
}

function starcoliderfunc() {
    starcolx = (starx - 300) * (starx - 300);
    starcoly = (stary - 400) * (stary - 400);
    starcol = Math.sqrt(starcolx + starcoly);
    if (starcol < 110) {
        starpos();
        starcount +=1;
    }
}



const queue = new Queue();
const queue2 = new Queue();
var count = 0;
var rerend = true;
function render() {
    starpos();
  
    var intervalId = setInterval(function () {
        
        if (count < 50) {
            var colbool = false;
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

            var Circle = new circle(a, 5, c, d, colbool, count);
            count++;
            Circle.move();
            queue.enqueue(Circle);
            
            
           
        }
        if (rerend) {
            queue2.forEach(function (circle) {
                circle.rerending();
                circle.move();
                queue.enqueue(queue2.dequeue());
            });
        }
    }, 200);
   
    function animate() {
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawNum(starcount);
        rotationAngle += 1; // ȸ�� ���� ���� (1����)
        centerY += my;
        centerX += mx;
        starx += mx;
        stary += my;
        drawRotatingHeart(rotationAngle);
        star();
        star2();
        starcoliderfunc();
        queue.forEach(function (circle) {
            if (circle.coliderfnc()) {
                HP--;
                death();
                
                handleCollision(circle);
                
            }
            if (circle.recircle()) {
                handleCollision(circle);
            }
            circle.moves();
            circle.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
function handleCollision(circle) {
    var collidedCount = circle.count;
    queue.removeByCount(collidedCount);
    queue2.enqueueByCount(collidedCount, circle);
    console.log(queue2.size());
   
}
function handleCollision2(circle) {
    var collidedCount = circle.count;
    queue2.removeByCount(collidedCount);
    queue.enqueueByCount(collidedCount, circle);


}
render();

var randomx = Math.random() * 200;
var randomy = Math.random() * 300;
function star2() {



    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);

    ctx.scale(50, 50);
    for (var i = 0; i < 360; i++) {

        ctx.lineTo(Math.cos(Math.PI / 180 * i), Math.sin(Math.PI / 180 * i));

    }






    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fill();

    ctx.closePath();

    ctx.restore();


}
var starx;
var stary;
function starpos() {
    var arran = Math.round(Math.random() * 3) + 1;
    if (arran == 1) {
        starx = Math.random() * 800;
        stary = 0;
    }
    if (arran == 2) {
        starx = 0;
        stary = Math.random() * 900;
    }
    if (arran == 3) {
        starx = Math.random() * 800;
        stary = 900;
    }
    if (arran == 4) {
        starx = 600;
        stary = Math.random() * 900;
    }
}
function star() {

  

    ctx.save();
    ctx.beginPath();
    ctx.translate(starx, stary);




    for (var i = 0; i < 360; i++) {
        if (i % 60 == 0) {
            ctx.scale(50, 50);
            ctx.lineTo(Math.cos(Math.PI / 180 * (i - 30)), Math.sin(Math.PI / 180 * (i - 30)));

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





















function drawNum1(x) {
    //������ �� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    //������ �Ʒ� �۴��

    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
function drawNum2(x) {

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // ���� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum3(x) {

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum4(x) {

    //���� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum5(x) {

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum6(x) {

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // ���� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum7(x) {

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

}

function drawNum8(x) {
    //���� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    // ���� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
function drawNum9(x) {
    //���� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�߰��۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
function drawNum0(x) {
    //���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //������ �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //���� ���� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();


    //������ �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    // ���� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //�� �Ʒ� �۴��
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

