// ConsoleApplication8.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//
#pragma comment(lib, "Opengl32.lib")

#include<GLFW/glfw3.h>
#include <iostream>

float moveXFactor = 0.0f;
float moveYFactor = 0.0f;
float ClickX = 0.0f;
float ClickY = 0.0f;
float scaleFactor = 1.0f;
bool isLeftDragging = false;
bool isRightDragging = false;
double prevXPos, prevYPos;
void errorCallback(int error, const char* description)
{
	std::cerr << "GLFW Error: " << description << std::endl;
}


void mouse_button_callback(GLFWwindow* window, int button, int action, int mods)
{
	double xpos, ypos;
	if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS) {
		isLeftDragging = true;
		glfwGetCursorPos(window, &xpos, &ypos);
		prevXPos = xpos;
		prevYPos = ypos;
		
	}
	else if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_RELEASE) {
		
		isLeftDragging = false;
		
	}
	else if (button == GLFW_MOUSE_BUTTON_RIGHT && action == GLFW_PRESS) {
		isRightDragging = true;
		glfwGetCursorPos(window, &xpos, &ypos);
		prevXPos = xpos;
	}
	else if (button == GLFW_MOUSE_BUTTON_RIGHT && action == GLFW_RELEASE) {
		isRightDragging = false;
	}
}

void mouse_callback(GLFWwindow* window, double xpos, double ypos)
{
	if (isLeftDragging) {
		
		moveXFactor = (xpos - prevXPos) / 650.0f;
		moveYFactor = -(ypos - prevYPos) / 350.0f;
		std::cout <<"!!x:" << (xpos-prevXPos)/650.0f <<"!!y:" << -(ypos-prevYPos)/350.0f << std::endl;
		std::cout << "@@x:" << ClickX << "@@y:" << ClickY << std::endl;
		std::cout << "##x:" << moveXFactor << "##y:" << moveYFactor << std::endl;
	
		
	}
	else if (!isLeftDragging) {
		ClickX = (xpos - prevXPos) / 1000.0f;
		ClickY = -(ypos - prevYPos)/1000.0f;
	}
	
	
	if (isRightDragging) {

		if (prevXPos < xpos) {
			scaleFactor += 0.005f;
			prevXPos = xpos;
		}
		else if (prevXPos > xpos) {
			scaleFactor -= 0.005f;
			prevXPos = xpos;
		}


	}
}

void keyCallback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
	if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
	{
		glfwSetWindowShouldClose(window, GLFW_TRUE);
	}

	if (key == GLFW_KEY_RIGHT && action == GLFW_PRESS)
	{
		scaleFactor += 0.01f;
	}
	if (key == GLFW_KEY_LEFT && action == GLFW_PRESS) {
		scaleFactor -= 0.01;
	}
}

int render()
{
	//중앙
	//중앙
	glBegin(GL_TRIANGLES);
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.0f * scaleFactor + moveXFactor, -0.2f * scaleFactor + moveYFactor);
	//점2
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.2f * scaleFactor + moveXFactor, 0.0f * scaleFactor + moveYFactor);
	//점3
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(-0.2f * scaleFactor + moveXFactor, 0.0f * scaleFactor + moveYFactor);
	glEnd();

	glBegin(GL_TRIANGLES);
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.0f * scaleFactor + moveXFactor, -0.25f * scaleFactor + moveYFactor);
	//점2
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.0f * scaleFactor + moveXFactor, 0.2f * scaleFactor + moveYFactor);
	//점3
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(-0.125f * scaleFactor + moveXFactor, -0.4f * scaleFactor + moveYFactor);
	glEnd();

	glBegin(GL_TRIANGLES);
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.0f * scaleFactor + moveXFactor, -0.25f * scaleFactor + moveYFactor);
	//점2
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.0f * scaleFactor + moveXFactor, 0.2f * scaleFactor + moveYFactor);
	//점3
	glColor3f(1.0f, 1.0f, 1.0f);
	glVertex2f(0.125f * scaleFactor + moveXFactor, -0.4f * scaleFactor + moveYFactor);
	glEnd();
	


	return 0;
}


int main(void)
{
	//glfw라이브러리 초기화
	if (!glfwInit())
		return -1;

	GLFWwindow* window;
	window = glfwCreateWindow(1280, 768, "MuSoeunEngine", NULL, NULL);

	if (!window)
	{
		glfwTerminate();
		return -1;
	}

	/* Make the window's context current */
	glfwMakeContextCurrent(window);
	glfwSetErrorCallback(errorCallback);

	glfwSetKeyCallback(window, keyCallback);
	glfwSetMouseButtonCallback(window, mouse_button_callback);
	glfwSetCursorPosCallback(window, mouse_callback);
	while (!glfwWindowShouldClose(window))
	{
		glfwPollEvents();
		glClearColor(1.0f, 0.0f, 1.0f, 1.0f);
		glClear(GL_COLOR_BUFFER_BIT);

		render();

		glfwSwapBuffers(window);
	}

	glfwTerminate();
	return 0;

}