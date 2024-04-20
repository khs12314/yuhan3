#include "MObject.h"
#include <random>
#include <GLFW/glfw3.h>

class Star : public MObject
{
	void update()
	{

	}
	void render()
	{
		std::random_device rd;
		std::mt19937 gen(rd());
		std::uniform_real_distribution<float> distribution_move(-1.0f, 1.0f); // -1.0���� 1.0 ������ ������ float
		std::uniform_real_distribution<float> distribution_scale(-0.25f, 0.0f); // 0.5���� 2.0 ������ ������ float
		std::uniform_real_distribution<float>R(1.0f, 256.0f);
		std::uniform_real_distribution<float>G(1.0f, 256.0f);
		std::uniform_real_distribution<float>B(1.0f, 256.0f);
		float moveXFactor = distribution_move(gen); // -1.0���� 1.0 ������ ������ ��
		float moveYFactor = distribution_move(gen); // -1.0���� 1.0 ������ ������ ��
		float scaleFactor = distribution_scale(gen); // 0.5���� 2.0 ������ ������ ��		
		glBegin(GL_TRIANGLES);
		glColor3f((float)rand() / RAND_MAX, (float)rand() / RAND_MAX, (float)rand() / RAND_MAX);
		glVertex2f(0.0f * scaleFactor + moveXFactor, -0.2f * scaleFactor + moveYFactor);
		//��2

		glVertex2f(0.2f * scaleFactor + moveXFactor, 0.0f * scaleFactor + moveYFactor);
		//��3

		glVertex2f(-0.2f * scaleFactor + moveXFactor, 0.0f * scaleFactor + moveYFactor);
		glEnd();

		glBegin(GL_TRIANGLES);
	
		glVertex2f(0.0f * scaleFactor + moveXFactor, -0.25f * scaleFactor + moveYFactor);
		//��2

		glVertex2f(0.0f * scaleFactor + moveXFactor, 0.2f * scaleFactor + moveYFactor);
		//��3

		glVertex2f(-0.125f * scaleFactor + moveXFactor, -0.4f * scaleFactor + moveYFactor);
		glEnd();

		glBegin(GL_TRIANGLES);
		
		glVertex2f(0.0f * scaleFactor + moveXFactor, -0.25f * scaleFactor + moveYFactor);
		//��2

		glVertex2f(0.0f * scaleFactor + moveXFactor, 0.2f * scaleFactor + moveYFactor);
		//��3

		glVertex2f(0.125f * scaleFactor + moveXFactor, -0.4f * scaleFactor + moveYFactor);
		glEnd();

	}
};