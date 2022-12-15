

![header](https://capsule-render.vercel.app/api?type=Waving&color=FFE9A0&height=230&section=header&text=Potato%20Academy&desc=학원%20통합%20관리%20사이트&fontAlignY=40&fontSize=70&descSize=16&descAlignY=53&descAlign=67.5)

# Spring-Boot(AcademyProject)

학원 통합 관리 사이트 

>## 🖥 프로젝트 소개
> 웹 개발 학원에 다니던 기간에 가장 쉽게 접근해 볼 수 있는 주제가 학원 관리 시스템이었습니다.
> <br> 다수의 학생, 강사, 수업을 직접 효율적으로 관리할 수 있었으면 좋겠다는 생각에 프로그램을 기획하게 되었습니다.
>## 🕰 개발 기간
> 2022.10 ~ 2022.12
>## ⚙ 개발 환경
> - `Java 11`
> - `JDK 11.0.15`
> - **IDE** : STS 4.11
> - **FrameWork** : Spring (5.3.13), Mybatis
> - **Build Tool** : Maven 
> - **Database** : Oracle DB(18c)
> - **Design tool** : Bootstrap5
>
>## 👩‍👩‍👧‍👧 멤버구성
> 
>|🍎 윤정은|🍞 방현주|☔ 강우선|💚 이소원|
>|:---:|:---:|:---:|:---:|
>|<a href="https://github.com/yun-developer"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> |<a href="https://github.com/bb9oo"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> |<a href="https://github.com/kwseon"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> |<a href="https://github.com/SOWON22"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> |
>|레이아웃, Spring Security,  회원 CRUD, 학생 편성 관리, 출결 관리,  DB 설계|로그인, ID/PW 찾기,  관리자용 교사 CRUD, 평가 CRUD,  통계 관리, DB 설계|학생 CRUD, Paging 처리,  게시판/댓글 등록, 조회, 삭제 기능,  수납관리, DB 설계| 과목/교실 등록, 조회, 삭제 기능, 학급 CRUD, 게시판 및 댓글 수정,  DB 설계, PPT 제작|



## 목차

- [프로젝트 주요 내용](https://github.com/yun-developer/AcademyProject#-프로젝트-주요-내용)
  - [핵심기능](https://github.com/yun-developer/AcademyProject#-핵심기능)
  - [ERD 다이어그램](https://github.com/yun-developer/AcademyProject#-ERD-다이어그램)
  - [구동화면](https://github.com/yun-developer/AcademyProject#-구동-화면)
  - [Short Description](#short-description)
  - [Long Description](#long-description)
- [Definitions](#definitions)

## 📍 프로젝트 주요 내용

### ⭐ 핵심기능

**관리자** 

- 운영관리  
- 학급편성  
- 교사관리  
- 공지사항


**교사**

- 회원가입  
- 로그인  
- 학생관리  
- 학급관리  
- 평가관리  
- 자유게시판

 


### 🗝 ERD 다이어그램

![erd](https://user-images.githubusercontent.com/109609187/207746001-e6d40a4a-0f0b-4ff2-9b43-21199ee63ea8.png)




### 📺 구동 화면

<details>
<summary>메인</summary>
<div markdown="1">

![메인](https://user-images.githubusercontent.com/109609187/207758177-fb88cc2a-067b-4c5d-82ae-3a4d9f16e8aa.gif)

</div>
</details>

<details>
<summary>회원가입</summary>
<div markdown="1">

![회원가입](https://user-images.githubusercontent.com/109609187/207757815-9a842444-ebdf-4665-a218-b9ac58f15af4.gif)

</div>
</details>

<details>
<summary>ID/PW 찾기</summary>
<div markdown="1">

![아이디비번찾기](https://user-images.githubusercontent.com/109609187/207758283-68807a51-9a57-463b-840a-f27dd553c475.gif)

</div>
</details>

<details>
<summary>학생 CRUD</summary>
<div markdown="1">

![학생crud](https://user-images.githubusercontent.com/109609187/207758723-4308793f-6d10-4de2-9e5b-e2be3e01b875.gif)

</div>
</details>


<details>
<summary>학급편성</summary>
<div markdown="1">

![학급편성](https://user-images.githubusercontent.com/109609187/207758778-7587b510-f9f7-48c4-83da-b4b70d1b3a99.gif)
  
</div>
</details>

<details>
<summary>학급배정</summary>
<div markdown="1">

![학급배정](https://user-images.githubusercontent.com/109609187/207758707-6beba47b-2d4f-4ab6-a590-d8fbd0865331.gif)
  
</div>
</details>

<details>
<summary>평가관리</summary>
<div markdown="1">

![평가관리](https://user-images.githubusercontent.com/109609187/207759168-d5a6dd3c-0586-4d46-8d42-1d83bfff5596.gif)
  
</div>
</details>

<details>
<summary>출결관리</summary>
<div markdown="1">

![출결관리](https://user-images.githubusercontent.com/109609187/207759830-558dfa4b-3a8c-4708-8f62-bcf7d743d302.gif)
  
</div>
</details>

<details>
<summary>통계</summary>
<div markdown="1">

![통계](https://user-images.githubusercontent.com/109609187/207760473-3d644a37-a129-473a-9294-d34bc5a8063f.gif)
  
</div>
</details>

<details>
<summary>게시판</summary>
<div markdown="1">

![게시판](https://user-images.githubusercontent.com/109609187/207763600-21e315ad-1091-4fd4-90fc-2b42456131bb.gif)
  
</div>
</details>

