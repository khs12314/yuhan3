const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var color = "gray";
var ax = 300;
var ay = 300;

var bx = 300;
var by = 700;

var cx = 700;
var cy = 300;
// �ﰢ���� ������
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

    // ���� ���� ȸ��
    var xnew = px * c - py * s;
    var ynew = px * s + py * c;

    // �߽������� �̵�
    return [xnew + cx, ynew + cy];
}

// �ﰢ�� ȸ��
function rotateTriangle(angle) {
    var centroid = calculateCentroid(A, B, C);
    A = rotatePoint(A, angle, centroid);
    B = rotatePoint(B, angle, centroid);
    C = rotatePoint(C, angle, centroid);
}
// �ﰢ�� �׸���
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
    var angle = Math.PI / 180; // ȸ�� ���� (����)

    // �� ���� ȸ�� �߽��� �������� �̵�
    var ax_centered = ax - cx;
    var ay_centered = ay - cy;
    var bx_centered = bx - cx;
    var by_centered = by - cy;
    var cx_centered = 0;
    var cy_centered = 0;

    // �� ���� ȸ��
    var ax_rotated = ax_centered * Math.cos(angle) - ay_centered * Math.sin(angle);
    var ay_rotated = ax_centered * Math.sin(angle) + ay_centered * Math.cos(angle);
    var bx_rotated = bx_centered * Math.cos(angle) - by_centered * Math.sin(angle);
    var by_rotated = bx_centered * Math.sin(angle) + by_centered * Math.cos(angle);

    // ȸ�� �� �ٽ� ������ ȸ�� �߽��� ��ġ�� �̵�
    ax = ax_rotated + cx;
    ay = ay_rotated + cy;
    bx = bx_rotated + cx;
    by = by_rotated + cy;

    // �� ���� �迭�� ����
    A = [ax, ay];
    B = [bx, by];
    C = [cx, cy];
}

// ������ ��ȣ�� ���
function crossProductSign(P, Q, R) {
    return (Q[0] - P[0]) * (R[1] - P[1]) - (Q[1] - P[1]) * (R[0] - P[0]);
}

// ���� �ﰢ�� ���ο� �ִ��� Ȯ��
function isPointInTriangle(P, A, B, C) {
    let b1 = crossProductSign(P, A, B) < 0.0;
    let b2 = crossProductSign(P, B, C) < 0.0;
    let b3 = crossProductSign(P, C, A) < 0.0;
    return ((b1 === b2) && (b2 === b3));
}

// Ŭ�� �̺�Ʈ ó��
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
    Rotaterend();  // 1�� ȸ��
    drawTriangle();
    requestAnimationFrame(rotateAndDraw);
}

// �ʱ� �ﰢ�� �׸���
rotateAndDraw()
