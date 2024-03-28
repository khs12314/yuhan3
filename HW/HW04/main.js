// JavaScript source code
//Canvas Element �ҷ�����
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");
var NumP = 10;
var studentID = 202127067;

function drawNum(num) {
    //GPT�� ���� �߰��� �ڵ带 �����ϸ� �Էµ� ������ �������� ��µ� ������ ��� ��ü�� ���� ū �ڸ������� �Ϸ� ������
    //��ȿ�����̶� �Ǵ��� ������ ����ϴ� �ͱ����� ���������� ���̸� ���� ��������� �������� ������. ���� parsesint�� ���� �ͱ��� ������ ��ġ�� ����.
    var NumP = 10, cntnum = 0;
    var numStr = num.toString(); //*êGPT ���ڸ� ���ڿ��� ��ȯ
    var length = numStr.length;//*êGPT ���ڿ��� ����
    var startX = (length - 1) * 50;//*êGPT ����-1�� 50�� ���� �� ���� ���
    for (var i = length - 1; i >= 0; i--) {
        cntnum = parseInt(numStr[i]);
        //* êGPT �迭�� ���� ���� ��� 
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
function drawNum1(x) {
    //������ �� �۴��
    ctx.beginPath();
    ctx.moveTo(50+x, 0);
    ctx.lineTo(50+x, 25);
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    //������ �Ʒ� �۴��

    ctx.beginPath();
    ctx.moveTo(50+x, 25);
    ctx.lineTo(50+x, 50);
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
    ctx.lineTo(50+ x, 25);
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





drawNum(studentID)//ȭ�� ���� ��ܿ� ���� ����