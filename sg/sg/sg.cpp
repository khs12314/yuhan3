﻿#pragma comment(lib, "Opengl32.lib")
#include <GLFW/glfw3.h>
#include <iostream>
#include <chrono>
#include <thread>
#include <cmath>
using namespace std;
int cnt;
float jump;
float g;

float y;
float y2;
float x;
float x2;
float movef;
float gx;
float gx2;
float gy;
float gy2;
float displayx = 1920;
float displayy = 1080;
bool jumpchargebool = false;
bool jumpbool = false;
// 7-segment segment positions
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

// 7-segment segment positions using the provided conversion functions
struct Segment {
    GLfloat x1, y1, x2, y2, x3, y3, x4, y4;
};

// Use conversion functions to adjust segment coordinates
// Use conversion functions to adjust segment coordinates
Segment segments[7] = {
    { XM(-0.3f), YM(0.8f), XM(0.3f), YM(0.8f), XM(0.2f), YM(0.7f), XM(-0.2f), YM(0.7f) }, // a
    { XM(0.3f), YM(0.8f), XM(0.3f), YM(0.4f), XM(0.2f), YM(0.5f), XM(0.2f), YM(0.7f) }, // b
    { XM(0.3f), YM(0.3f), XM(0.3f), YM(-0.1f), XM(0.2f), YM(0.0f), XM(0.2f), YM(0.2f) }, // c
    { XM(-0.3f), YM(-0.2f), XM(0.3f), YM(-0.2f), XM(0.2f), YM(-0.1f), XM(-0.2f), YM(-0.1f) }, // d
    { XM(-0.3f), YM(0.3f), XM(-0.3f), YM(-0.1f), XM(-0.2f), YM(0.0f), XM(-0.2f), YM(0.2f) }, // e
    { XM(-0.3f), YM(0.8f), XM(-0.3f), YM(0.4f), XM(-0.2f), YM(0.5f), XM(-0.2f), YM(0.7f) }, // f
    { XM(-0.3f), YM(0.3f), XM(0.3f), YM(0.3f), XM(0.2f), YM(0.2f), XM(-0.2f), YM(0.2f) }  // g
};

// Number to segment mapping
int numbers[10][7] = {
    {1, 1, 1, 1, 1, 1, 0}, // 0
    {0, 1, 1, 0, 0, 0, 0}, // 1
    {1, 1, 0, 1, 1, 0, 1}, // 2
    {1, 1, 1, 1, 0, 0, 1}, // 3
    {0, 1, 1, 0, 0, 1, 1}, // 4
    {1, 0, 1, 1, 0, 1, 1}, // 5
    {1, 0, 1, 1, 1, 1, 1}, // 6
    {1, 1, 1, 0, 0, 0, 0}, // 7
    {1, 1, 1, 1, 1, 1, 1}, // 8
    {1, 1, 1, 1, 0, 1, 1}  // 9
};

void drawSegment(const Segment& seg, GLfloat offsetX) {
    glBegin(GL_QUADS);
    glVertex2f(seg.x1 + offsetX, seg.y1);
    glVertex2f(seg.x2 + offsetX, seg.y2);
    glVertex2f(seg.x3 + offsetX, seg.y3);
    glVertex2f(seg.x4 + offsetX, seg.y4);
    glEnd();
}

void displayDigit(int digit, GLfloat offsetX) {
    for (int i = 0; i < 7; ++i) {
        if (numbers[digit][i]) {
            drawSegment(segments[i], offsetX);
        }
    }
}

void displayNumber(int num) {
    int hundreds = num / 100;
    int tens = (num / 10) % 10;
    int ones = num % 10;

    displayDigit(hundreds, -0.3f);  // Leftmost digit
    displayDigit(tens, 0.0f);      // Middle digit
    displayDigit(ones, 0.3f);      // Rightmost digit
}
float jumpcharge = YM(3) / 60;
void keyCallback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
    if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
    {
        glfwSetWindowShouldClose(window, GLFW_TRUE);
    }


    if (key == 32 && action == GLFW_PRESS) {

        jumpchargebool = true;
        jumpbool = true;
        jump = YM(50) / 60;
    }
    if (key == 32 && action == GLFW_RELEASE) {
        jumpchargebool = false;



    }

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
int player() {
    glBegin(GL_QUADS);
    glColor3f(1.0f, 0.0f, 0.0f);


    glVertex2f(x, y);
    glVertex2f(x, y2);
    glVertex2f(x2, y2);
    glVertex2f(x2, y);
    glEnd();

    return 0;
}
chrono::steady_clock::time_point prev_end = chrono::steady_clock::now();
int delay_time_ms = 0;
int a = 0;
int main()
{
    x = XM(0);
    x2 = XM(1);
    y = YM(0);
    y2 = YM(1);
    gx = XM(10 * (displayx / displayy));
    gx2 = XM(-10 * (displayx / displayy));
    gy = YM(0);
    gy2 = YM(-10);
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
        this_thread::sleep_for(chrono::milliseconds(1000 / 60 - a));
        delay_time_ms = 17 - chrono::duration_cast<chrono::milliseconds>(chrono::steady_clock::now() - prev_end).count();
        //출력
        if (jumpchargebool) {
            jump += jumpcharge;
        }

        std::cerr << a << std::endl;
        if (jumpbool) {

            g = YM(4.9) / 60;
            jump = jump - g;
            y = y + jump;
            y2 = y2 + jump;
            cnt += 1;
            std::cout << cnt << ":" << M(jump) << std::endl;
        }
        if ((x <= gx) && (y <= gy)) {
            jumpbool = false;
            movef = 0.0f;
            g = 0.0f;
            jump = 0.f;
            cnt = 0;
            x = XM(0);
            x2 = XM(1);
            y = YM(0);
            y2 = YM(1);


        }
        // 이벤트 처리
        glfwPollEvents();
        glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);


        // 렌더링 버퍼 교체
        displayNumber(5);
        player();
        glfwSwapBuffers(window);
        prev_end = chrono::steady_clock::now();
        a = 1000 / 60 - delay_time_ms;
    }

    // GLFW 종료
    glfwTerminate();
    return 0;
}
