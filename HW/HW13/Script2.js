const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var color = "gray";
var ax = 300;
var ay = 300;

var bx = 300;
var by = 700;

var cx = 700;
var cy = 300;
// 삼각형의 꼭지점
var A = [ax, ay];
var B = [bx, by];
var C = [cx, cy];
var P = [0, 0];
function rotatePoint(x1, y1, x2,y2,p1,p2) {
    // Convert angle from degrees to radians
    if ((x1 != x2) && (y1 != y2)) {
        var rad = rotatevalue(x1, y1, x2, y2);
    }
    if (x1 == x2) {
        var rad = 90 * (Math.PI / 180);
    }
    if (y1 == y2) {
        var rad = 0;
    }
    // Calculate the cosine and sine of the angle
    var cos = Math.cos(rad);
    var sin = Math.sin(rad);

    // Apply the rotation matrix
    var newX = x1 * cos - y1 * sin;
    var newY = x1 * sin + y1 * cos;
    var newX2 = x2 * cos - y2 * sin;
    var newY2 = x2 * sin + y2 * cos;   
    var newX3 = p1 * cos - p2 * sin;
    var newY3 = p1 * sin + p2 * cos;
    var minx;
    var maxx;
    console.log(newX);
    console.log(newY);
    console.log(newX2);
    console.log(newY2);
    console.log(newX3);
    console.log(newY3);
    if (newX > newX2) {
        maxx = newX;
        minx = newX2;
    }
    else {
        maxx = newX2;
        minx = newX;
    }
    if ((newY3 < newY) && (newX3 < maxx) && (newX3 > minx)) {
        return true;
    }
    
    
}
function Rotaterend() {
    var angle = Math.PI / 180; // 회전 각도 (라디안)

    // 각 점의 회전 중심을 원점으로 이동
    var ax_centered = ax - cx;
    var ay_centered = ay - cy;
    var bx_centered = bx - cx;
    var by_centered = by - cy;
    var cx_centered = 0;
    var cy_centered = 0;

    // 각 점을 회전
    var ax_rotated = ax_centered * Math.cos(angle) - ay_centered * Math.sin(angle);
    var ay_rotated = ax_centered * Math.sin(angle) + ay_centered * Math.cos(angle);
    var bx_rotated = bx_centered * Math.cos(angle) - by_centered * Math.sin(angle);
    var by_rotated = bx_centered * Math.sin(angle) + by_centered * Math.cos(angle);

    // 회전 후 다시 원래의 회전 중심의 위치로 이동
    ax = ax_rotated + cx;
    ay = ay_rotated + cy;
    bx = bx_rotated + cx;
    by = by_rotated + cy;

    // 각 점의 배열로 저장
    A = [ax, ay];
    B = [bx, by];
    C = [cx, cy];
}
function rotateAndDraw() {
    // 1도 회전
    drawTriangle();
    requestAnimationFrame(rotateAndDraw);
}
function rotatevalue(x1, y1, x2, y2) {
    if ((x1 != x2) && (y1 != y2)) {
        var value = (y2 - y1) / (x2 - x1);//기울기를 구하는 공식
        var radian = Math.atan(value);//atan을 이용해 기울기를 라디안으로 변환

        return -radian;
    }
    else if (x1 == x2) {
        return false;
    }
    if (y1 == y2) {
        return 0;
    }
}

function yIntercep(x1, y1, x2, y2) {

    var falsepos1 = [0, 0];
    var falsepos2 = [0, 0];

    // y절편 계산
    if (rotatevalue(x1, y1, x2, y2) != false) {
        var yIntercept = y1 - (rotatevalue(x1, y1, x2, y2) * x1);
        return yIntercept;
    }
    else if (rotatevalue(x1, y1, x2, y2) == false) {
        falsepos1 = falserotate(x1, y1);
        falsepos2 = falserotate(x2, y2);
        var yIntercept = y1 - (rotatevalue(falsepos1[0], falsepos1[1], falsepos2[0], falsepos1[1]) * x1);
        return yIntercept;
    }
}

function falserotate(x, y) {

    var newposx = y
    var newposy = x;
    return [newposx, newposy];
}
function drawTriangle() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(B[0], B[1]);
    ctx.lineTo(C[0], C[1]);

    ctx.fill();
    ctx.closePath();

}
function inout() {
    var bool1 = rotatePoint(A[0], A[1], B[0], B[1], P[0], P[1]);
    var bool2 = rotatePoint(B[0], B[1], C[0], C[1], P[0], P[1]);
    var bool3 = rotatePoint(C[0], C[1], A[0], A[1], P[0], P[1]);
    var count = 0;
    if (bool1) {
        count++;
    }
    if (bool2) {
        count++;
        
    }
    if (bool3) {
        count++;
    }
    return count;
}
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    P = [mouseX, mouseY];
    if (inout() == 3) {
        console.log("in")
    }
    else {
        console.log("out");
    }
});
rotateAndDraw()