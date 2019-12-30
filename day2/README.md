# 2일차 과제
## 목표
- State가 무엇인지 이해한다.
- 이벤트 핸들러를 사용해 본다.

## 과제

1일차의 `base-name` 프로젝트에서 이어집니다.

> `components/NameInput.jsx`의 텍스트 입력란에 텍스트를 입력하면,
> `console.log`으로 그 값을 콘솔에 출력하도록 `onChanged` 한들러를 만드세요.

### 관련 문서
- [리액트 공식 문서 - 이벤트 처리하기](https://ko.reactjs.org/docs/handling-events.html)
- [리액트 공식 문서 - 폼](https://ko.reactjs.org/docs/forms.html)

출력만 하지 말고, 이제 텍스트 안의 값을 저장해 보겠습니다.
우리가 쉽게 HTML로 input을 만들지 않고 리액트 컴포넌트를 만드는 이유는 페이지에 들어가는 요소를 조각내서 재사용하기 위해서입니다.
그렇기 때문에 컴포넌트 안에서 저장하는 값은 전역 변수로 저장해서는 안됩니다.
`<NameInput />`가 1000개 있고, 각각 `name`라는 변수를 저장한다면 1000개의 `<NameInput />`마다 하나씩 다른 `name`을 가져야 하겠죠.
구조체의 멤버 변수와 같은 느낌입니다.

리액트에서 컴포넌트 안에 값을 저장할 때는 **상태 (state)** 를 만들어 저장합니다.

- [리액트 공식 문서 - Using the State Hook(한글)](https://ko.reactjs.org/docs/hooks-state.html)

> `NameInput` 컴포넌트에서, input 값을 `name`라는 state에 저장하도록 컴포넌트를 수정하세요.

> Change 버튼을 누르면 `name`값을 읽어와 '노정훈님 안녕하세요.'와 같이 경고창이 뜨도록 Change 버튼의 onClick 핸들러를 작성하세요.
>> 힌트: Arrow Function