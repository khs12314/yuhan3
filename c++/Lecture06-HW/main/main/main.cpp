

#pragma comment(lib, "Opengl32.lib")

#include <GLFW/glfw3.h>
#include <iostream>
#include <random>
#include "MSList.h"
#include "Star.hpp"

float moveFactor = 0.0f;
float scaleFactor = 1.0f;

void errorCallback(int error, const char* description)
{
    std::cerr << "\033[1;31mGLFW Error: " << description << "\033[0m" << std::endl;
}

void keyCallback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
    if ( key == GLFW_KEY_ESCAPE && action == GLFW_PRESS )
    {
        glfwSetWindowShouldClose(window, GLFW_TRUE);
    }
    if ( key == GLFW_KEY_UP && action == GLFW_PRESS )
    {
        moveFactor += 0.01f;
    }
    if ( key == GLFW_KEY_RIGHT && action == GLFW_PRESS )
    {
        scaleFactor += 0.1f;
    }
}

void initialize(MSList<MObject*>& list)
{
    // Star 객체를 MSList에 추가
    for ( int i = 0; i < 300; i++ ) {
        list.add(new Star());
    }
}

void render(GLFWwindow* window, MSList<MObject*>& list)
{
    glfwPollEvents();
    glClearColor(0.1f, 0.2f, 0.5f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_real_distribution<float> distribution_move(-1.0f, 1.0f);
    std::uniform_real_distribution<float> distribution_color(0.0f, 1.0f);

    for ( int i = 0; i < list.get_size(); i++ ) {
        MObject* obj = list[ i ];

        // 랜덤한 위치와 색상으로 별을 렌더링
        float moveXFactor = distribution_move(gen);
        float moveYFactor = distribution_move(gen);
        float r = distribution_color(gen);
        float g = distribution_color(gen);
        float b = distribution_color(gen);

        glLoadIdentity();
        glTranslatef(moveXFactor, moveYFactor, 0.0f);
        glColor3f(r, g, b);
        obj->render();
        std::cout << i << std::endl;
    }

    glfwSwapBuffers(window);
}

int main(void)
{
    if ( !glfwInit() )
        return -1;

    GLFWwindow* window;
    window = glfwCreateWindow(1280, 768, "MuSoeunEngine", NULL, NULL);

    if ( !window )
    {
        glfwTerminate();
        return -1;
    }

    glfwMakeContextCurrent(window);
    glfwSetErrorCallback(errorCallback);
    glfwSetKeyCallback(window, keyCallback);

    // MSList를 사용하여 객체 저장
    MSList<MObject*> list;

    initialize(list);
    render(window, list);
    while ( !glfwWindowShouldClose(window) )
    {
        glfwPollEvents();
    }

    // MSList에 저장된 객체 메모리 해제
    for ( int i = 0; i < list.get_size(); i++ ) {
        delete list[ i ];
    }

    glfwTerminate();
    return 0;
}
