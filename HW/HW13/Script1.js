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
var Rotat = 0;
function calculateCentroid(A, B, C) {
    return [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
}

function rotatePoint(point, angle, center) {
    var [cx, cy] = center;
    var [px, py] = point;
    var s = Math.sin(angle);
    var c = Math.cos(angle);

    // 원점 기준 회전
    var xnew = px * c - py * s;
    var ynew = px * s + py * c;

    // 중심점으로 이동
    return [xnew + cx, ynew + cy];
}

// 삼각형 회전
function rotateTriangle(angle) {
    var centroid = calculateCentroid(A, B, C);
    A = rotatePoint(A, angle, centroid);
    B = rotatePoint(B, angle, centroid);
    C = rotatePoint(C, angle, centroid);
}
// 삼각형 그리기
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

// 외적의 부호를 계산
function crossProductSign(P, Q, R) {
    return (Q[0] - P[0]) * (R[1] - P[1]) - (Q[1] - P[1]) * (R[0] - P[0]);
}

// 점이 삼각형 내부에 있는지 확인
function isPointInTriangle(P, A, B, C) {
    let b1 = crossProductSign(P, A, B) < 0.0;
    let b2 = crossProductSign(P, B, C) < 0.0;
    let b3 = crossProductSign(P, C, A) < 0.0;
    return ((b1 === b2) && (b2 === b3));
}

// 클릭 이벤트 처리
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const P = [mouseX, mouseY];

    if (isPointInTriangle(P, A, B, C)) {
        console.log("in", P, A, B, C);
        color = "blue";
    } else {
        console.log("out");
        color = "red";
        
    }
});
function rotateAndDraw() {
    Rotaterend();  // 1도 회전
    drawTriangle();
    requestAnimationFrame(rotateAndDraw);
}

// 초기 삼각형 그리기
rotateAndDraw()
