#pragma comment(lib, "Opengl32.lib")
#include <GLFW/glfw3.h>
#include <iostream>
#include <chrono>
#include <thread>
#include <cmath>
using namespace std;
int cnt;
float jump;
float g;
float jumpcharge = 0.f;
float y;
float y2;
float x;
float x2;
float movef;
float gx;
float gx2;
float gy;
float gy2;
float eggx;
float eggx2;
float eggy;
float eggy2;
float xmove;
float displayx = 1920;
float displayy = 1080;
bool eggswitch = false;
bool jumpchargebool = false;
bool jumpbool = false;
bool start = false;
float YM(float a) {
    float b = 0.1f;
    return a * b;
}
float YP(float a) {
    float b = 108.f;
    return a * b;
}

float XM(float a) {
    float b = 0.1f / (displayx / displayy);

    return a * b;
}
float XP(float a) {
    float b = 108.f;
    return a * b;
}
float M(float a) {
    float b = a / 0.1f;
    return b;
}
void keyCallback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
    if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
    {
        glfwSetWindowShouldClose(window, GLFW_TRUE);
    }
    if (key == GLFW_KEY_SPACE && action == GLFW_PRESS) {
        eggswitch = true;
        eggx = x;
        eggx2 = x2;
        eggy =  y;
        eggy2 = y2;
      
    }
    if (key == GLFW_KEY_S && action == GLFW_PRESS) {
        start = true;

    }
    if (key == 32 && action == GLFW_PRESS) {

        jumpchargebool = true;


    }
    if (key == 32 && action == GLFW_RELEASE) {
        jumpchargebool = false;
        jump = jumpcharge / 60;
        jumpbool = true;
        jumpcharge = 0.f;
    }

}
bool aabbcolliderA(float _ax, float _ay, float bx, float by) {
    bool x = false;
    if ((_ax < bx) && (_ay < by)) {
        std::cout << "s";
        x = true;
    
    }
    return x;

}
bool aabbclliderB(float ax, float ay, float _ax, float _ay) {
    bool x = false;
    if ((_ax > ax) && (_ay > ay)) {
        x = true;
    }
    return x;
}
int egg() {
    if ((aabbcolliderA(eggx, eggy, gx, gy))&&(aabbclliderB(gx2, gy2,eggx, eggy))) {
        eggx = eggx;
        eggx2 = eggx2;
        eggy = eggy;
        eggy2 = eggy2;

    }
    else {
        eggx += (xmove - XM(0.01));
        eggx2 += (xmove - XM(0.01));
        eggy -= g;
        eggy2 -= g;
    }
    glBegin(GL_QUADS);
    glColor3f(0.0f, 1.0f, 0.0f);
    glVertex2f(eggx, eggy);
    glVertex2f(eggx, eggy2);
    glVertex2f(eggx2, eggy2);
    glVertex2f(eggx2, eggy);
    glEnd();

    return 0;
}
int ground() {
    glBegin(GL_QUADS);
    glColor3f(0.0f, 0.0f, 0.0f);
   

    glVertex2f(gx, gy);
    glVertex2f(gx, gy2);
    glVertex2f(gx2, gy2);
    glVertex2f(gx2, gy);
    glEnd();
    return 0;
}

int player(float angle) {
    x += xmove;
    x2 += xmove;
    y += YM(0.05 * cos(angle * (3.14 / 180)));
    y2 += YM(0.05 * cos(angle * (3.14 / 180)));
    glBegin(GL_QUADS);
    glColor3f(1.0f, 0.0f, 0.0f);

   
    glVertex2f(x, y);
    glVertex2f(x, y2);
    glVertex2f(x2, y2);
    glVertex2f(x2, y);
    glEnd();

    return 0;
}
float angle;
chrono::steady_clock::time_point prev_end = chrono::steady_clock::now();
int delay_time_ms = 0;
int a = 0;
int main()
{

    g = YM(4.9) / 60;
    xmove = XM(5)/60;
    x = XM(-16);
    x2 = XM(-15);
    y = YM(5);
    y2 = YM(6);
    gx = XM(10* (displayx / displayy));
    gx2 = XM(-10* (displayx / displayy));
    gy = YM(0);
    gy2 = YM(-10);
     eggx = XM(0.5);
     eggx2 = XM(0.5);
     eggy =YM(0.5);
     eggy2 = YM(0.5);
    if (!glfwInit()) {
        std::cerr << "GLFW 초기화 실패" << std::endl;
        return -1;
    }

    // 윈도우 생성
    GLFWwindow* window = glfwCreateWindow(displayx, displayy, "삼각형 회전하기", NULL, NULL);
    if (!window) {
        std::cerr << "윈도우 생성 실패" << std::endl;
        glfwTerminate();
        return -1;
    }

    // OpenGL 컨텍스트를 윈도우에 연결
    glfwMakeContextCurrent(window);
    glfwSetKeyCallback(window, keyCallback);
    // 렌더링 루프
    while (!glfwWindowShouldClose(window)) {

        // 현재 시간 가져오기
        this_thread::sleep_for(chrono::milliseconds(17 - a));
        delay_time_ms = 17 - chrono::duration_cast<chrono::milliseconds>(chrono::steady_clock::now() - prev_end).count();
        //출력
        angle += 1;
        
        // 이벤트 처리
        glfwPollEvents();
        glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);
        ground();
        if (start) {
            if (eggswitch) {
                egg();
            }
            // 렌더링 버퍼 교체

            player(angle);
        }
        glfwSwapBuffers(window);
        prev_end = chrono::steady_clock::now();
        a = 17 - delay_time_ms;
    }

    // GLFW 종료
    glfwTerminate();
    return 0;
}
