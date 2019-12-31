
### 1. npm, parcel 사용해 보기
`base-name` 폴더로 이동해서 `npm i`를 실행합니다.

> `npm i`는 어떤 역할이며, `package.json`에서 어떤 부분을 읽을까요?

 dependencies에 있는 모듈을 설치해준다.
> `npm i`로 설치한 파일은 어디에 저장될까요?

폴더에 node_modules폴더를 생성하여 설치한다.

> npm run dev는 어떤 역할을 하나요?

package.json에 있는 script 중 dev를 실행시킨다.
> npm run dev 처럼 서버를 실행하지 않고, 한번 빌드만 해서 `output` 폴더에 저장하고 싶습니다.ㅈ
> 이런 기능을 `npm run build`로 실행하도록 `package.json` 파일에 명령을 추가하세요.

scripts에 "build": "parcel build src/index.html --out-dir ./output" 을 추가한다

> 리액트에서 많은 양의 컴포넌트를 빠르게 그리기 위해 사용하는 기술은?

virtual DOM을 이용하여 기존과 새로운 DOM을 비교하여 바뀐것만 업데이트 한다.

**JSX 안에 자바스크립트 값 사용하기** 이전까지는 꼭 읽어야 합니다.

`src` 폴더의 코드를 한 파일에서 다른 파일을 불러오는 관계에 유의하면서 코드를 읽어보세요.

> `src/index.js`의 각 줄에 주석을 달아보세요. 주석이 5개가 있어야 합니다.

> `src/components/main.jsx`의 9, 10번 줄에서 각 컴포넌트는 어디서 가져오는 걸까요?

NameInput은 NameInput.jsx에서 마지막에 export한 것을 가져오고, SayHi도 동일하게 SayHi.jsx에서 가져옵니다.
> `src/components/SayHi.jsx`에서 1, 3, 9번 줄에 어떤 코드인지 설명하는 주석을 다세요.

> name에 저장된 값 그대로 전달해서 '김명중님 안녕하세요' 라고 뜨게 코드를 바꿔봅시다.
