#pragma comment(lib, "Opengl32.lib")
#include <GLFW/glfw3.h>
#include <iostream>
#include <cmath>
//각도 = 시간*각속도를 응용해 각도 및 시간을 구함
void rotateTriangle2(float offsetX, float offsetY) {
    glBegin(GL_TRIANGLES);
    glColor3f(0.1f, 1.0f, 1.0f);
    glVertex2f(0.0f + offsetX, -0.02f + offsetY);
    //점2

    glVertex2f(0.02f + offsetX, 0.0f + offsetY);
    //점3

    glVertex2f(-0.02f + offsetX, 0.0f + offsetY);
    glEnd();

    glBegin(GL_TRIANGLES);

    glVertex2f(0.0f + offsetX, 0.02f + offsetY);
    //점2

    glVertex2f(0.008f + offsetX, -0.012f + offsetY);
    //점3

    glVertex2f(-0.0125f + offsetX, -0.04f + offsetY);
    glEnd();
    glBegin(GL_TRIANGLES);

    glVertex2f(0.0f + offsetX, 0.02f + offsetY);
    //점2

    glVertex2f(-0.008f + offsetX, -0.012f + offsetY);
    //점3

    glVertex2f(0.0125f + offsetX, -0.04f + offsetY);
    glEnd();
   
}
void rotateTriangle(float offsetX,float offsetY){
    glBegin(GL_TRIANGLES);
    glColor3f(0.0f, 0.1f, 1.0f);
    glVertex2f(0.0f + offsetX, -0.02f + offsetY);
    //점2

    glVertex2f(0.02f + offsetX, 0.0f + offsetY);
    //점3

    glVertex2f(-0.02f + offsetX, 0.0f + offsetY);
    glEnd();

    glBegin(GL_TRIANGLES);

    glVertex2f(0.0f + offsetX, 0.02f + offsetY);
    //점2

    glVertex2f(0.008f + offsetX, -0.012f + offsetY);
    //점3

    glVertex2f(-0.0125f + offsetX, -0.04f + offsetY);
    glEnd();
    glBegin(GL_TRIANGLES);

    glVertex2f(0.0f + offsetX, 0.02f + offsetY);
    //점2

    glVertex2f(-0.008f + offsetX, -0.012f + offsetY);
    //점3

    glVertex2f(0.0125f + offsetX, -0.04f + offsetY);
    glEnd();
    
}
// 삼각형을 그리는 함수
void drawTriangle(float offsetX, float offsetY) {
   /* glBegin(GL_LINE_LOOP);
    glColor3f(1.0f, 1.0f, 1.0f);

    glVertex2f(0.0f + offsetX, 0.2f + offsetY);
    glVertex2f(0.08f + offsetX, 0.0f + offsetY);
    glVertex2f(0.2f + offsetX, 0.0f + offsetY);
    glVertex2f(0.125f + offsetX, -0.2f + offsetY);
    glVertex2f(0.155f + offsetX, -0.4f + offsetY);
    glVertex2f(0.0f + offsetX, -0.25f + offsetY);    
    glVertex2f(-0.155f + offsetX, -0.4f + offsetY);
    glVertex2f(-0.125f + offsetX, -0.2f + offsetY);
    glVertex2f(-0.2f + offsetX, 0.0f + offsetY);
    glVertex2f(-0.08f + offsetX, 0.0f + offsetY);
    glVertex2f(0.0f + offsetX, 0.2f + offsetY);
     glVertex2f(0.0f+offsetX,0.0f+offsetY);
    glVertex2f(0.0f + offsetX, 0.2f + offsetY);
    glVertex2f(-0.05f + offsetX, 0.05f + offsetY);  
    glVertex2f(-0.2f + offsetX, 0.0f + offsetY);
    glVertex2f(-0.05f + offsetX, -0.05f + offsetY);
    glVertex2f(-0.15f + offsetX, -0.2f + offsetY);
    glVertex2f(0.0f + offsetX, -0.125f + offsetY);
    glVertex2f(0.15f + offsetX, -0.2f + offsetY);
    glVertex2f(0.05f + offsetX, -0.05f + offsetY);
    glVertex2f(0.2f + offsetX, 0.0f + offsetY);
    glVertex2f(0.05f + offsetX, 0.05f + offsetY);
    glVertex2f(0.0f + offsetX, 0.2f + offsetY);
   glVertex2f(-0.025f + offsetX, -0.125f + offsetY);6
    glVertex2f(-0.125f + offsetX, -0.4f + offsetY);
    glVertex2f(0.0f + offsetX, -0.2f + offsetY);
    glVertex2f(0.125f + offsetX, -0.4f + offsetY);
    glVertex2f(0.025f + offsetX, -0.125f + offsetY);

    glVertex2f(0.2f + offsetX, 0.0f + offsetY);

   
    glEnd();   */
        glBegin(GL_TRIANGLES);
		glColor3f(1.0f, 1.0f,1.0f);
		glVertex2f(0.0f +offsetX, -0.2f +offsetY);
		//점2

		glVertex2f(0.2f +offsetX, 0.0f + offsetY);
		//점3

		glVertex2f(-0.2f + offsetX, 0.0f + offsetY);
		glEnd();

		glBegin(GL_TRIANGLES);

		glVertex2f(0.0f + offsetX, -0.25f + offsetY);
		//점2

		glVertex2f(0.0f + offsetX, 0.2f + offsetY);
		//점3

		glVertex2f(-0.125f + offsetX, -0.4f + offsetY);
		glEnd();

		glBegin(GL_TRIANGLES);

		glVertex2f(0.0f + offsetX, -0.25f + offsetY);
		//점2

		glVertex2f(0.0f + offsetX, 0.2f + offsetY);
		//점3

		glVertex2f(0.125f + offsetX, -0.4f + offsetY);
		glEnd();

		
}

int setVertexRotation(float x, float y, float angle_degree,float offsetX, float offsetY)
{
    float M_PI = 3.14;
    float angle = angle_degree / 180 * M_PI;
    
    glVertex2f((x * cos(angle) - (y * sin(angle)))+offsetX, (x * sin(angle) + (y * cos(angle)))+offsetY);
   
    
    return 0;
}
float angle = 0;
int render2()
{

    float time = glfwGetTime();
    float angle = time * 6.0f;
    float angle2 = time * 120.0f;
    float posX = std::cos(angle * 3.14159265359 / 180.0f);
    float posY = std::sin(angle * 3.14159265359 / 180.0f);
    float _posX = std::sin(angle2 * 3.14159265359 / 180.0f)/4 + posX;
    float _posY = std::cos(angle2 * 3.14159265359 / 180.0f)/4 + posY;
    glBegin(GL_TRIANGLE_FAN);
    glColor3f(1.0f, 1.0f, 0.0f);
    setVertexRotation(0.0f, 0.0f, 0, _posX, _posY);

    for (int i = 0; i < 360; i = i + 72)
    {
        setVertexRotation(0.1f, 0.0f, i + angle2, _posX, _posY);
        setVertexRotation(0.05f, 0.0f, i + 36 + angle2, _posX, _posY);
    }

    setVertexRotation(0.1f, 0.0f, angle2, _posX, _posY);

    glEnd();


    angle += 1;

    glLineWidth(1.0f);

    glBegin(GL_LINES);
    glColor3f(0.0f, 0.0f, 0.0f);



    for (int i = 0; i < 360; i = i + 72)
    {
        setVertexRotation(0.05f, 0.0f, i - 36 + angle2, _posX, _posY);
        setVertexRotation(0.1f, 0.0f, i + angle2, _posX, _posY);

        setVertexRotation(0.1f, 0.0f, i + angle2, _posX, _posY);
        setVertexRotation(0.05f, 0.0f, i + 36 + angle2, _posX, _posY);
    }

    glEnd();

    return 0;
}
int quads() {
    float time = glfwGetTime();
    float angle = time * 6.0f;
    float angle2 = time * 60;
    float posX = std::cos(angle * 3.14159265359 / 180.0f);
    float posY = std::sin(angle * 3.14159265359 / 180.0f);
    glBegin(GL_QUAD_STRIP);
    glColor3f(0.35686275f, 0.60784314f, 0.83529412f);
    setVertexRotation(0.0f, 0.0f, 0, posX, posY);

    for (int i = 0; i < 360; i = i + 90)
    {
        setVertexRotation(0.1f, 0.0f, i + angle2, posX, posY);
        setVertexRotation(0.05f, 0.0f, i + angle2, posX,posY);
    }

    setVertexRotation(0.1f, 0.0f, angle2, posX, posY);
    glEnd();
    angle += 1;

    glLineWidth(1.0f);

    glBegin(GL_LINES);
    glColor3f(0.0f, 0.0f, 0.0f);



    for (int i = 0; i < 360; i = i + 90)
    {
       

        setVertexRotation(0.1f, 0.0f, i + angle2, posX, posY);

        
    }
    for (int i = 0; i < 360; i = i + 90)
    {


        setVertexRotation(0.1f, 0.0f, -i + angle2, posX, posY);

    }
    glEnd();
    return 0;
    
}
/*int render()
{

    float time = glfwGetTime();
    float angle = time * 45.0f;
    float posX = std::cos(angle * 3.14159265359 / 180.0f);
    float posY = std::sin(angle * 3.14159265359 / 180.0f);
    float _posX =  std::sin(angle * 3.14159265359 / 180.0f) + posX;
    float _posY = std::cos(angle * 3.14159265359 / 180.0f) + posY;
    glBegin(GL_TRIANGLE_FAN);
    glColor3f(0.7f, 0.8f, 0.85f);
    setVertexRotation(0.0f, 0.0f, 0,posX,posY);

    for (int i = 0; i < 360; i = i + 72)
    {
        setVertexRotation(0.1f, 0.0f, i + angle, posX, posY);
        setVertexRotation(0.05f, 0.0f, i + 36 + angle, posX, posY);
    }

    setVertexRotation(0.1f, 0.0f, angle, posX, posY);

    glEnd();

    angle += 1;


    glLineWidth(10.0f);

    glBegin(GL_LINES);
    glColor3f(0.5f, 0.0f, 0.0f);



    for (int i = 0; i < 360; i = i + 72)
    {
        setVertexRotation(0.05f, 0.0f, i - 36 + angle, posX, posY);
        setVertexRotation(0.1f, 0.0f, i + angle, posX, posY);

        setVertexRotation(0.1f, 0.0f, i + angle, posX, posY);
        setVertexRotation(0.05f, 0.0f, i + 36 + angle, posX, posY);
    }

    glEnd();

    return 0;
}*/
int circle() {
    float time = glfwGetTime();
    float angle = time * -12.0f;
    float angle2 = -45.0f+time * 12.0f;//각도 = 시간*각속도의 공식으로 기존 0도 즉 360도이던 현 위치에 -45(+315)를 해 45도회전된 곳에서 시작

    float posX = std::cos(angle * 3.14159265359 / 180.0f);
    float posY = std::sin(angle * 3.14159265359 / 180.0f);
    float _posX = std::cos(angle2 * 3.14159265359 / 180.0f);
    float _posY = std::sin(angle2 * 3.14159265359 / 180.0f);
    float M_PI = 3.14159265359;
    glLineWidth(10.0f);
    glBegin(GL_LINE_LOOP);

    
    glColor3f(1.0f, 0.85098f, 0.4f);
    for (int i = 0; i < 3600; i++)
    {
        glVertex2f(sin(M_PI/180*i)/2,cos(M_PI/180*i)/2);
        glVertex2f(cos(M_PI / 180 * i)/2, sin(M_PI / 180 * i)/2);
    }
    glEnd();
    glLineWidth(5.0f);
    glBegin(GL_LINE_LOOP);
    glColor3f(0.772549f, 0.352941f, 0.066667f);
    for (int i = 0; i < 3600; i++)
    {
        glVertex2f(sin(M_PI / 180 * i) / 2, cos(M_PI / 180 * i) / 2);
        
    }
    glEnd();
    glLineWidth(10.0f);
    glBegin(GL_LINE_LOOP);

    
    glColor3f(1.0f, 0.90196f, 0.6f);
    for (int i = 0; i < 3600; i++)
    {
        
        glVertex2f(-(sin(M_PI / 180 * i) / 8+(posX/4)), (cos(M_PI / 180 * i) / 8) + (posY / 4));
        glVertex2f(-(cos(M_PI / 180 * i) / 8+ (posX / 4)), (sin(M_PI / 180 * i) / 8) + (posY / 4));
    }
    glEnd();

  

  


  
 
    glPushMatrix();

   
    glBegin(GL_LINE_LOOP);
    
   
    glColor3f(1.0f, 0.7529f, 0.0f);
    for (int i = 0; i < 3600; i++)
    {
        
        setVertexRotation((sin(M_PI / 180 * i) / 32), (cos(M_PI / 180 * i) / 8),angle2,(_posX/2.25),_posY/2.25);
        
        setVertexRotation((cos(M_PI / 180 * i) / 32), (sin(M_PI / 180 * i) / 8), angle2, (_posX / 2.25), _posY / 2.25);
    }
    std::cout << angle2 << std::endl;
    glEnd();
    glPopMatrix();
    return 0;
}
int main() {
    // GLFW 초기화
    if (!glfwInit()) {
        std::cerr << "GLFW 초기화 실패" << std::endl;
        return -1;
    }

    // 윈도우 생성
    GLFWwindow* window = glfwCreateWindow(800, 800, "삼각형 회전하기", NULL, NULL);
    if (!window) {
        std::cerr << "윈도우 생성 실패" << std::endl;
        glfwTerminate();
        return -1;
    }

    // OpenGL 컨텍스트를 윈도우에 연결
    glfwMakeContextCurrent(window);

    // 렌더링 루프
    while (!glfwWindowShouldClose(window)) {
        // 현재 시간 가져오기
        float time = glfwGetTime();

        // 화면을 지우고 새로 그림
        glClear(GL_COLOR_BUFFER_BIT);
        glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
        // 첫 번째 삼각형 그리기 (화면 중앙)
        drawTriangle(0.0f, 0.0f);
        // 두 번째 삼각형 그리기 (첫 번째 삼각형을 중심으로 공전)
                
        circle();
        glPushMatrix();
        quads();
       
        glPopMatrix();
        glPushMatrix();
        render2();
   
        glPopMatrix();
        // 렌더링 버퍼 교체
        glfwSwapBuffers(window);

        // 이벤트 처리
        glfwPollEvents();
    }

    // GLFW 종료
    glfwTerminate();
    return 0;
}
