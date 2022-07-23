# 이노베이션 캠프 6주차 미니 프로젝트 프론트 엔드

## 컴포넌트 담당

|  이름  | 담당                 |
| :----: | :------------------- |
| 박지민 | 게시글 작성-수정     |
| 김종현 | 로그인-회원가입      |
| 안동규 | 메인-상세-마이페이지 |

#### 추가작업

- 댓글(컴포넌트, 수정, 삭제)
- 게시글(삭제) - api, redux state 수정

### 스택

- [ ] 리액트
- [ ] 리덕스(toolkit)
- [ ] styled-components
- [ ] react-router-dom
- [ ] axios
- [ ] mock API

## Trouble Shooting

- 헤더 모양 및 사이드바 유무
  사이드바를 상시 보이게 하면 모든 페이지에서, 심지어 유저가 사이드바가 필요없는 상황에서도 사이드바는 view width를 차지하고 있게 됨. 목록이 특히나 두 개 밖에 없어서 있다 해도 사이드바 안 공간도 낭비가 많음 👉 없애기로 결정
- 사이드바에 있는 내용을 헤더로 이동
  이렇게 되면 로고나 로그인 등 기존 UI의 위치가 애매해 짐. 그래서 로고를 위에 넣고 밑에 로그인 등 다른 UI를 넣는 게 어떤지 토론을 했음(2단 헤더). 이에 대한 예시 페이지로는 SSG와 무신사 페이지를 참고함. 하지만 inflearn페이지를 보고 나서 1단으로 하되 position을 fixed로 해서 고정해두는 것이 훨씬 낫다고 판단. 다른 팀원들과 회의를 통해서 수정하기로 결정.
- Pagenation을 구현하던 중에 useEffect사용과 관련해서 고민이 있었음. 페이지 nav를 클릭해서 1page, 2page... 로 넘어갈 때 useEffect안에 해당
  페이지에 들어갈 게시물을 계산하는 로직을 넣었다. 하지만 생각해보니 어차피 같은 컴포넌트 안에 있는 setPage가 작동되면 해당 컴포넌트 전체가 재실행 될탠데 그렇다면 굳이 넣을 필요는 없다는 판단이 들었다. 넣는다면 의존성 배열에 page를 설정해주면 되는데, 안하는 것과 똑같은 효과이기 때문에 괜히 또 쓰지 않았다.
