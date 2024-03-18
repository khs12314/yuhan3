# 1. VCS란?

VCS란 버전 관리 시스템의 줄인말 입니다.

버전 관리 시스템은 파일의 변화를 시간에 따라 저장하여 특정 시점의 버전을 다시 불러올 수 있는 시스템입니다.

대표적으로 깃이 있습니다.

VCS의 종류에는 로컬 버전 관리시스템(LVCS)

중앙집중식 버전관리 시스템(CVCS)

분산 버전관리 시스템(DVCS)가 있습니다.

# 2. DVCS와 VCS의 차이점

VCS 중앙 서버에서만 저장되고 관리되고 DVCS는 개인의 로컬 시스템에 전체 저장소의 복사본을 가지고 있고 로컬에서 변경 후 커밋한 뒤 중앙서버에 저장(푸쉬)가 가능합니다.

또한 VCS는 중앙 서버에 의존해 네크워크의 연결이 중요하고 중앙 서버에 접속 할 수 

없으면 작업을 진행할 수 없어 곤란한 상황이 생길 수 있지만

DVCS는 로컬 저장소를 사용하므로 네트워크 연결이 중요합니다.

또한 VCS는 중앙 서버에 문제가 생기면 작업이 중단될 수 있지만 DVCS는 로컬 저장소

를 통해 작업하기 때문에 중앙 서버에 대한 의존성이 낮습니다.

# 3. GIT을 이용하여 remote repository를 생성하고 git용 bash로 새로 intialize한 local repository랑 연결하는 과정을 스크린샷과 함께 각 명령어의 자세한 셜명을 작성하시오.

<img src="IMG/hwimg1.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
먼저 깃 허브를 통해 원격 레파지토리를 생성해줍니다.

<img src="IMG/hwimg2.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
그 다음 깃배쉬를 통해 c드라이브에 mkdir 명령어를 통해 yhhw라는 파일을 생헝 후 git init으로git 저장소로 초기화 해줍니다.

<img src="IMG/hwimg3.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
git branch -M main이라는 명령어를 통해 main이라는 브랜치를 생성하고 이름을 main으로 변경해줍니다.

<img src="IMG/hwimg4.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>

vim 명령어를 통해 README.md라는 파일을 생성 혹은 수정을 해줍니다.

<img src="IMG/hwimg5.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
수정 혹은 생성 및 수정을 한 후 esc키를 누룬 다음 :wq 명령어를 입력하면 자동으로 저장 및 나가기가되고 git status를 통해

현재 파일의 상태를 확인해줍니다.

<img src="IMG/hwimg6.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
git add 명령어를 통해 수정 혹은 추가된 파일들을 commit을 하기위해 스테이징 영역에 추가해 줍니다.

git add.은 해당 폴더의 모든 파일들을 추가하는 것이고 하나하나씩 추가하기 위해선 각 파일들의 이름들을 넣어야합니다.

<img src="IMG/hwimg7.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
git add .을 통해 스테이징 영역에 추가된것을 확인하기 위해 git status를 통해 한번 더 확인해봅니다. 위 사진처럼

추가하고자 하는 파일의 색상이 초록색이 됐다면 잘 추가된것이고 commit을 할 준비가 된 것 입니다.

<img src="IMG/hwimg8.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
git commit을 통해 2024 프로그래밍 패턴 과제라는 문장으로 커밋 해 줬습니다.

git commit -m"text" 명령어를 통해서도 commit을 해도 됩니다.

<img src="IMG/hwimg9.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
그 다음 바로 git push를 하면 해당 오류가 뜹니다. 이유는 yhhw라는 local repository와 git의 remote repository와 연결이 되어 있지 않기 때문입니다.

다행히 오류 해결을 위한 명령어를 알려주었으니 바로 git remote add <이름><url> yhhw와 git의 원격 저장소를 연결해줍시다.

여기서 이름은 자유롭게하되 url은 연결하고자 하는 본인의 깃허브의 remote repository의 주소를 넣어야합니다.

<img src="IMG/hwimg10.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
문제를 해결 후 다시 git push를 해주면 또 다른 오류가 뜹니다.

이 오류는 원격저장소에 기본 branch를 설정하지 않아서 나는 오류로 이번에도 친절하게 명령어를 알려주었습니다.

<img src="IMG/hwimg11.png" width="300px" height="300px" title="px(픽셀) 크기 설정" alt="remote repository"></img><br/>
git bash에서 알려준 명령어대로 입력하면 push가 끝났습니다.




# 4. .gitignore 사용법과 작성방식

먼저 .gitignore이란 보안성 위험이 있는 파일 혹은 프로젝트와 관련없는 파일 등과 같은 것들을 git add에 포함시키고 싶지 않을 파일들을 간단하게 제외시켜주는 파일이다.

사용법은 git init을 한 폴더에 .gitignore이란 이름으로 파일을 하나 만들어주고, 그 안에 제외할 파일들을 한줄씩 쓰면됩니다.

# 5. ReadMe.md파일에 사용된 마크다운 표기법에 대해서 해더/목록/순서없는목록/들여쓰기/코드블럭/수평선/링크/이미지/강조에 대해 사용방법을 정리해오시오.

## 헤더


헤더의 중 큰제목(문서의 제목)록에 쓰이는 문법은 =자 입니다

예시: 마크다운 헤더H1
=====================

그리고 문서의 부제목용 문법 또한 존재합니다.
예시: 마크다운 H2
-----------------

또한 #으로도 표현이 가능한데 #은 1~6까지만 지원합니다.

# 예시: H1 
## 예시: H2
### 예시: H3
#### 예시: H4
##### 예시: H5
###### 예시: H6
####### 예시 : H7(지원하지 않음)

## 목록

목록읜 순서가 있는 목록과 순서가 없는 목록으로 나뉩니다.

먼저 순서가 있는 목록은 숫자와 점을 사용합니다.

1. 1 번째
2. 2 번째
3. 3 번째

다음은 순서가 없는 목록입니다.

*, +, -를 사용합니다

* 1
  * 2
    * 3

+ 1
  + 2
    + 3

- 1
  - 2
    - 3

이런식으로 같은 문자를 반복해서 나누어도되고

* 1
  + 2
    - 3
      - 3
이런식으로 혼합해서 사용도 가능합니다.


## 들여쓰기

들여쓰기는 4개의 공백 혹은 1개의 탭으로 들여쓰기를 만나면 변환되기 시작하여 들여쓰지 않은 행을 만날때까지 변환이 계속됩니다.

This is a nomal paragraph:

    This is a code block.

end code block.

한줄을 띄어쓰지않으면 제대로 안되는 문제가 발생할 수 있습니다.

This is a nomal paragraph:
    This is a code block.
end code block.

## 코드블럭

코드 블럭은 다음과 같이 2가지 방식을 사용할 수 있습니다.

* \<pre><\code>{code}</code\></pre\>방식

<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code>
</pre> 

* ("```")을 이용하는 방법

```
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

깃허브에선 코드블럭코드("```")시작점에 사용하는 언어를 선언하여 문법강조가 가능하다.

\``\`java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
\``\`


```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

## 수평선

아래 줄은 모두 수평선을 만든다. 마크다운 문서를 미리보기로 출력할 때 페이지 나누기 용도로 많이 사용한다.

\**\*

***

\* * \*

* * *

\****\*

*****

\- - \-


- - -

\-----------------\-

-------------------

## 링크

* 참조 링크

[link keyword][id]



[id]: URL "Optional Title here"


//code

Link: [google][googlelinke]

[googlelinke]: https://www.google.co.kr/

* 외부링크

사용문법: \[Title\]\(link\)

적용예: [Google](https://www.google.co.kr/)

* 자동연결

일반적인 URL 혹은 이메일 주소인 경우 적절한 형식으로 링크를 형성한다.

* 외부링크: <\https://github.com/khs12314\>

* 이메일링크: <\address@example.com\>

적용예

* 외부링크: <https://github.com/khs12314>

* 이메일링크: <address@example.com>

## 이미지

![Alt text](IMG/pcimg.jpg)
![1234](IMG/pcimg.jpg)
사이즈 조절 기능은 없기 때문에 <img width="" height=""></img>를 이용한다.

<img src="IMG/pcimg.jpg" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="내pc"></img><br/>
<img src="IMG/pcimg.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="내pc"></img>

## 강조

\*202127067\*

*202127067*

\_202127067\_

_202127067_

\**김한솔\**

**김한솔**

\__김한솔\__

__김한솔__

\~~202127067 김한솔\~~

~~202127067 김한솔~~

문장 중간에 사용할 경우에는 **띄어쓰기** 를 사용하는 것이 좋다.







