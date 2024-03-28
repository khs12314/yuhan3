// JavaScript source code
//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var NumP = 10;
var studentID = 202127067;

function drawNum(num) {
    //GPT를 통해 추가한 코드를 제외하면 입력된 숫자의 역순으로 출력돼 숫자의 계산 자체를 가장 큰 자릿수부터 하려 했지만
    //비효율적이라 판단해 역으로 출력하는 것까지만 생각했지만 길이를 통한 역순계산은 생각하지 못했음. 또한 parsesint를 쓰는 것까지 생각이 미치지 못함.
    var NumP = 10, cntnum = 0;
    var numStr = num.toString(); //*챗GPT 숫자를 문자열로 변환
    var length = numStr.length;//*챗GPT 문자열의 길이
    var startX = (length - 1) * 50;//*챗GPT 길이-1에 50을 곱해 총 길이 계산
    for (var i = length - 1; i >= 0; i--) {
        cntnum = parseInt(numStr[i]);
        //* 챗GPT 배열을 통한 역순 계산 
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
       

        startX -= 50;//-50을 통해 각 숫자당 50의 범위를 할당
        
    }
}
function drawNum1(x) {
    //오른쪽 위 작대기
    ctx.beginPath();
    ctx.moveTo(50+x, 0);
    ctx.lineTo(50+x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    //오른쪽 아래 작대기

    ctx.beginPath();
    ctx.moveTo(50+x, 25);
    ctx.lineTo(50+x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
function drawNum2(x) {

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // 왼쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum3(x) {

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum4(x) {

    //왼쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum5(x) {

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum6(x) {

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //왼쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // 왼쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function drawNum7(x) {

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50+ x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //왼쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

}

function drawNum8(x) {
    //왼쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    // 왼쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
function drawNum9(x) {
    //왼쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //중간작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
function drawNum0(x) {
    //왼쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(25 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //오른쪽 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 0);
    ctx.lineTo(50 + x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //가장 위쪽 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 0);
    ctx.lineTo(50 + x, 0);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();


    //오른쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(50 + x, 25);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    // 왼쪽 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 25);
    ctx.lineTo(25 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //맨 아래 작대기
    ctx.beginPath();
    ctx.moveTo(25 + x, 50);
    ctx.lineTo(50 + x, 50);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}





drawNum(studentID)//화면 우측 상단에 숫자 쓰기