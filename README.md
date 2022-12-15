

![header](https://capsule-render.vercel.app/api?type=Waving&color=FFE9A0&height=230&section=header&text=Potato%20Academy&desc=학원%20통합%20관리%20사이트&fontAlignY=40&fontSize=70&descSize=16&descAlignY=53&descAlign=67.5)

# Spring-Boot(AcademyProject)

학원 통합 관리 사이트 

>## 🖥 프로젝트 소개
> 웹 개발 학원에 다니던 기간에 가장 쉽게 접근해 볼 수 있는 주제가 학원 관리 시스템이었습니다.
> <br> 다수의 학샐, 강사, 수업을 직접 효율적으로 관리할 수 있었으면 좋겠다는 생각에 프로그램을 기획하게 되었습니다.
>## 🕰 개발 기간
> 2022.10 ~ 2022.12
>## ⚙ 개발 환경
> - `Java 11`
> - `JDK 11.0.15`
> - **IDE** : STS 4.11
> - **FrameWork** : Spring (5.3.13)
> - **Build Tool** : Maven 
> - **Database** : Oracle DB(18c)
> - **ORM** : Mybatis
> - **Design tool** : Bootstrap5
>
>## 👩‍👩‍👧‍👧 멤버구성
> 
>|🍎 윤정은|🍞 방현주|☔ 강우선|💚 이소원|
>|:---:|:---:|:---:|:---:|
>|테스트1|테스트2|테스트3|테스트3|
>|<a href="https://github.com/yun-developer"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://github.com/yun-developer"><img src="https://img.shields.io/badge/윤노션-FFBF00?style=flat-square&logo=Notion&logoColor=black"/></a>|<a href="https://github.com/bb9oo"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://github.com/yun-developer"><img src="https://img.shields.io/badge/방노션-FFBF00?style=flat-square&logo=Notion&logoColor=black"/></a>|<a href="https://github.com/kwseon"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://github.com/yun-developer"><img src="https://img.shields.io/badge/강노션-FFBF00?style=flat-square&logo=Notion&logoColor=black"/></a>|<a href="https://github.com/SOWON22"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <a href="https://github.com/yun-developer"><img src="https://img.shields.io/badge/이노션-FFBF00?style=flat-square&logo=Notion&logoColor=black"/></a>|
>|레이아웃, Spring Security,  회원 CRUD, 학생 편성 관리, 출결 관리,  DB 설계|로그인, ID/PW 찾기,  관리자용 교사 CRUD, 평가 CRUD,  통계 관리, DB 설계|학생 CRUD, Paging 처리,  게시판/댓글 등록, 조회, 삭제 기능,  수납관리, DB 설계| 과목/교실 등록, 조회, 삭제 기능, 학급 CRUD, 게시판 및 댓글 수정,  DB 설계, PPT 제작|



## 목차

- [핵심기능](https://github.com/yun-developer/AcademyProject#핵심기능)
  - [Title](#aaa)
  - [Banner](#banner)
  - [Badges](#badges)
  - [Short Description](#short-description)
  - [Long Description](#long-description)
  - [Table of Contents](#table-of-contents-1)
  - [Security](#security)
  - [Background](#background)
  - [Install](#install)
  - [Usage](#usage)
  - [Extra Sections](#extra-sections)
  - [API](#api)
  - [Maintainers](#maintainers)
  - [Thanks](#thanks)
  - [Contributing](#contributing)
  - [License](#license)
- [Definitions](#definitions)

## 핵심기능

### aaa
**Status:** Required.

**Requirements:**
- Title must match repository, folder and package manager names - or it may have another, relevant title with the repository, folder, and package manager title next to it in italics and in parentheses. For instance:

  ```markdown
  # Standard Readme Style _(standard-readme)_
  ```

  If any of the folder, repository, or package manager names do not match, there must be a note in the [Long Description](#long-description) explaining why.

**Suggestions:**
- Should be self-evident.





### Table of Contents
**Status:** Required; optional for READMEs shorter than 100 lines.

**Requirements:**
- Must link to all Markdown sections in the file.
- Must start with the next section; do not include the title or Table of Contents headings.
- Must be at least one-depth: must capture all `##` headings.

**Suggestions:**
- May capture third and fourth depth headings. If it is a long ToC, these are optional.

### Security
**Status**: Optional.

**Requirements:**
- May go here if it is important to highlight security concerns. Otherwise, it should be in [Extra Sections](#extra-sections).

### Background
**Status:** Optional.

**Requirements:**
- Cover motivation.
- Cover abstract dependencies.
- Cover intellectual provenance: A `See Also` section is also fitting.

### Install
**Status:** Required by default, optional for [documentation repositories](#definitions).

**Requirements:**
- Code block illustrating how to install.

**Subsections:**
- `Dependencies`. Required if there are unusual dependencies or dependencies that must be manually installed.

**Suggestions:**
- Link to prerequisite sites for programming language: [npmjs](https://npmjs.com), [godocs](https://godoc.org), etc.
- Include any system-specific information needed for installation.
- An `Updating` section would be useful for most packages, if there are multiple versions which the user may interface with.

### Usage
**Status:** Required by default, optional for [documentation repositories](#definitions).

**Requirements:**
- Code block illustrating common usage.
- If CLI compatible, code block indicating common usage.
- If importable, code block indicating both import functionality and usage.

**Subsections:**
- `CLI`. Required if CLI functionality exists.

**Suggestions:**
- Cover basic choices that may affect usage: for instance, if JavaScript, cover promises/callbacks, ES6 here.
- If relevant, point to a runnable file for the usage code.

### Extra Sections
**Status**: Optional.

**Requirements:**
- None.

**Suggestions:**
- This should not be called `Extra Sections`. This is a space for 0 or more sections to be included, each of which must have their own titles.
- This should contain any other sections that are relevant, placed after [Usage](#usage) and before [API](#api).
- Specifically, the [Security](#security) section should be here if it wasn't important enough to be placed above.

### API
**Status:** Optional.

**Requirements:**
- Describe exported functions and objects.

**Suggestions:**
- Describe signatures, return types, callbacks, and events.
- Cover types covered where not obvious.
- Describe caveats.
- If using an external API generator (like go-doc, js-doc, or so on), point to an external `API.md` file. This can be the only item in the section, if present.


### License
**Status:** Required.

**Requirements:**
- State license full name or identifier, as listed on the  [SPDX](https://spdx.org/licenses/) license list. For unlicensed repositories, add `UNLICENSED`. For more details, add `SEE LICENSE IN <filename>` and link to the license file. (These requirements were adapted from [npm](https://docs.npmjs.com/files/package.json#license)).
- State license owner.
- Must be last section.

**Suggestions:**
- Link to longer License file in local repository.

## Definitions

_These definitions are provided to clarify any terms used above._

- **Documentation repositories**: Repositories without any functional code. For instance, [RichardLitt/knowledge](https://github.com/RichardLitt/knowledge).
