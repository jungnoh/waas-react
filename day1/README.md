# 1일차 (12/29 일)
> `npm i`는 어떤 역할이며, `package.json`에서 어떤 부분을 읽을까요?
- dependencies 이름으로 열거된 pakage들을 설치한다.

> `npm i`로 설치한 파일은 어디에 저장될까요?
- 해당 폴더에 node_modules 폴더를 새로 만들어 거기에 저장된다.


> npm run dev는 어떤 역할을 하나요?
- package.json에서 script 안에 dev 로 정의된 것을 run한다.

> npm run dev 처럼 서버를 실행하지 않고, 한번 빌드만 해서 `output` 폴더에 저장하고 싶습니다.
> 이런 기능을 `npm run build`로 실행하도록 `package.json` 파일에 명령을 추가하세요.
- "build": "parcel build  src/index.html -d ./output"

> 리액트에서 많은 양의 컴포넌트를 빠르게 그리기 위해 사용하는 기술은?
- Virtual DOM에서 그려본 뒤 react에서 실제로 변화한 부분만 update 해준다.

> `src/components/Main.jsx`의 9, 10번 줄에서 각 컴포넌트는 어디서 가져오는 걸까요?
- NameInput.jsx가 아니라 Main.jsx로 바꿨습니다.(오타인거같아서)
- NameInput은 NameInput.jsx에서 export한 것을, SayHi는 SayHi.jsx에서 export한 것을 가져온다.

> name에 저장된 값 그대로 전달해서 '김명중님 안녕하세요' 라고 뜨게 코드를 바꿔봅시다.
- `<div>{props.name}님 안녕하세요.</div>`