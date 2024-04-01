#pragma comment(lib, "Opengl32.lib")
#include <GLFW/glfw3.h>
#include <iostream>

void errorCallback(int error, const char* description)
{
	std::cerr << "GLFW Error: " << description << std::endl;
}
void keyCallback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
	if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
	{
		glfwSetWindowShouldClose(window, GLFW_TRUE);
	}
	if (key == GLFW_KEY_F && action == GLFW_PRESS) {

		glClearColor(5.0f, 0.0f, 5.0f, 1.0f);

	}

}
bool isLeftDragging = false; 
bool isRightDragging = false;
double prevXPos, prevYPos;

void mouse_button_callback(GLFWwindow* window, int button, int action, int mods) {
	if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS) {
		isLeftDragging = true; //왼쪽 드래그 활성화
		double xpos, ypos;
		glfwGetCursorPos(window, &xpos, &ypos);//커서의 x좌표 y좌표 가져오기
		prevXPos = xpos;//전역변수 prevXPos에 클릭 시 있던 좌표값을 넣음
		prevYPos = ypos;//여기 또한 동일
		glClearColor(0.0f, 5.0f, 0.0f, 1.0f);//클릭시 색바뀜
	}
	else if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_RELEASE) {
		glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
		isLeftDragging = false;
	}
	if (button == GLFW_MOUSE_BUTTON_RIGHT && action == GLFW_PRESS) {
		isRightDragging = true;
		double xpos, ypos;
		glfwGetCursorPos(window, &xpos, &ypos);
		prevXPos = xpos;
		prevYPos = ypos;
		glClearColor(5.0f, 0.0f, 0.0f, 1.0f);
	}
	else if (button == GLFW_MOUSE_BUTTON_RIGHT && action == GLFW_RELEASE) {
		glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
		isRightDragging = false;
	}
}

void mouse_callback(GLFWwindow* window, double xpos, double ypos) {
	if (isLeftDragging) {
		double deltaX = xpos - prevXPos;//변수 선언과 동시에 매게변수로 가져온 값에 전역변수(클릭 시 가져온 x,y좌표)를 뺌
		double deltaY = ypos - prevYPos;//위와 동일
		std::cout << "Dragging delta: (" << deltaX << ", " << deltaY << ")" << std::endl;//단순 출력
		
		glClearColor(255.0f, 0.0f, 255.0f, 1.0f);
		prevXPos = xpos;//없어도 기능 상 큰 문제는 없고 역할은 전역변수의 값을 계속해서 갱신해 deltaX값이 커지지않게 유지함 의미가 있는지는 잘 모르곘음
		prevYPos = ypos;
	}else if (isRightDragging) {
		double deltaX = xpos - prevXPos;
		double deltaY = ypos - prevYPos;
		std::cout << "Dragging delta: (" << deltaX << ", " << deltaY << ")" << std::endl;
		
		glClearColor(0.0f, 0.0f, 5.0f, 1.0f);
		prevXPos = xpos;
		prevYPos = ypos;
	}
}

int main() {

	if (!glfwInit())
		return -1;
	GLFWwindow* window;

	window = glfwCreateWindow(1280, 768, "s", NULL, NULL);
	if (!window) {
		glfwTerminate();
		return -1;
	}
	glfwMakeContextCurrent(window);
	glfwSetErrorCallback(errorCallback);
	glfwSetKeyCallback(window, keyCallback);
	
	glfwSetMouseButtonCallback(window, mouse_button_callback);
	glfwSetCursorPosCallback(window, mouse_callback);
	while (!glfwWindowShouldClose(window))
	{
		glfwPollEvents();

		glClear(GL_COLOR_BUFFER_BIT);


		glfwSwapBuffers(window);
	}

	glfwTerminate();
	return 0;
}