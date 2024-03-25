using namespace std;
#include <iostream>

enum ForeColour {
    Default = 0,
    Black = 30,
    Red = 31,
    Green = 32,
    Yellow = 33,
    Blue = 34,
    Magenta = 35,
    Cyan = 36,
    White = 37,
};

int main()
{
    bool x = false;//key의 텍스트 or 정수 확인
    int key = 0, key2 = 0, key3 = 0;//key는 입력받는 변수 key2와 key3은 2진수를 구하기위한 변수
    int cnt1 = 0, cnt2 = 0, cnt4 = 0, cnt8 = 0, cnt16 = 0, cnt32 = 0;//2진수 확인
    cout << "화면에 그림을 그리는 프로그램입니다." << endl;
    cout << "학번 202127067" << endl;
    cout << "김한솔" << endl;
    while (key != 64) {
        key = 0;

        while (!x) {
            cout << "\x1b[037m" << "화면에 그릴 물체코드를 입력하세요:";
            cin >> key;
            //챗 gpt의 도움을 받은 fail, clear, ignore 이 셋은 텍스트를 입력 받았을 때 else쪽이 반복돼 도움을 받음
            if (cin.fail())//cin.fail은 예상한 형식과 일치하지 않는 입력을 받으면 true맞으면 false를 반환 
                //ex: int x(정수)에 h(문자)입력 시 형식과 일치하지 않아 true반환 4 입력시 형식과 일치해 true반환
            {
                cin.clear();//cin.clear를 통해 입력을 다시 할 수 있게 만들지만 cin.clear를 사용하고자 하는 변수의 버퍼는 초기화되지 않음
                cin.ignore(numeric_limits<streamsize>::max(), '\n');//입력 버퍼를 비움으로써 key의 입력버퍼가 공백이되어 오류해결
                cout << "\x1b[037m" << "다시 입력해주세요" << endl;
                cout << "흰색 블록을 그리는 키코드 : 1" << endl;
                cout << "빨강색 블록을 그리는 키코드 : 2" << endl;
                cout << "녹색 블록을 그리는 키코드 : 4" << endl;
                cout << "노란색 블록을 그리는 키코드 : 8" << endl;
                cout << "청록색 블록을 그리는 키코드 : 16" << endl;
                cout << "마젠타색 블록을 그리는 키코드 : 32" << endl;
                cout << "프로그램 종료 : 64" << endl;
            }
            else if ((1 <= key) && (key <= 64)) {
                break;
            }
            else {
                cout << "\x1b[037m" << "다시 입력해주세요" << endl;
                cout << "흰색 블록을 그리는 키코드 : 1" << endl;
                cout << "빨강색 블록을 그리는 키코드 : 2" << endl;
                cout << "녹색 블록을 그리는 키코드 : 4" << endl;
                cout << "노란색 블록을 그리는 키코드 : 8" << endl;
                cout << "청록색 블록을 그리는 키코드 : 16" << endl;
                cout << "마젠타색 블록을 그리는 키코드 : 32" << endl;
                cout << "프로그램 종료 : 64" << endl;
            }
        }
        key2 = key;
        key3 = key2 % 2;
        key2 = key2 / 2;
        cnt1 = key3;

        key3 = key2 % 2;
        key2 = key2 / 2;
        cnt2 = key3;

        key3 = key2 % 2;
        key2 = key2 / 2;
        cnt4 = key3;

        key3 = key2 % 2;
        key2 = key2 / 2;
        cnt8 = key3;

        key3 = key2 % 2;
        key2 = key2 / 2;
        cnt16 = key3;

        key3 = key2 % 2;
        key2 = key2 / 2;
        cnt32 = key3;
        if ((key == 1) || (cnt1 == 1)) {
            cout << "\x1b[037m" << "===" << endl;
            cout << "\x1b[037m" << "===" << endl;
            cout << "\x1b[037m" << "===" << endl;
        }
        if ((key == 2) || (cnt2 == 1)) {
            cout << "\x1b[031m" << "===" << endl;
            cout << "\x1b[031m" << "===" << endl;
            cout << "\x1b[031m" << "===" << endl;
        }
        if ((key == 4) || (cnt4 == 1)) {
            cout << "\x1b[032m" << "===" << endl;
            cout << "\x1b[032m" << "===" << endl;
            cout << "\x1b[032m" << "===" << endl;
        }
        if ((key == 8) || (cnt8 == 1)) {
            cout << "\x1b[033m" << "===" << endl;
            cout << "\x1b[033m" << "===" << endl;
            cout << "\x1b[033m" << "===" << endl;
        }
        if ((key == 16) || (cnt16 == 1)) {
            cout << "\x1b[034m" << "===" << endl;
            cout << "\x1b[034m" << "===" << endl;
            cout << "\x1b[034m" << "===" << endl;
        }
        if ((key == 32) || (cnt32 == 1)) {
            cout << "\x1b[035m" << "===" << endl;
            cout << "\x1b[035m" << "===" << endl;
            cout << "\x1b[035m" << "===" << endl;
        }
        else if (key == 64) {
            cout << "프로그램을 닫습니다.";
            break;
        }



    }


}