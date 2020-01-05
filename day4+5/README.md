# 4+5일차 과제
## 목표
- `useEffect` hook의 용도를 이해하고 적용해 본다.
- Styled component를 사용해 본다.
- 간단한 웹페이지를 리액트로 구현해 본다.

## `useEffect` hook

> [리액트 공식 문서](https://ko.reactjs.org/docs/hooks-reference.html#useeffect), 
> [보다 친절하지만 영어인 문서](https://ko.reactjs.org/docs/hooks-effect.html)
> 를 읽고 창 제목이 제때 업데이트 되도록 수정해 봅시다.
```jsx
  useEffect(() => {
    document.title =  `Counter: ${value}`;
  })
  ```

## Styled components


> 5번 러인에서 `const {index, onClick} = props;`가 어떤 의미인지
> [문서를 읽고](https://poiemaweb.com/es6-destructuring#2-%EA%B0%9D%EC%B2%B4-%EB%94%94%EC%8A%A4%ED%8A%B8%EB%9F%AD%EC%B2%98%EB%A7%81-object-destructuring)
> 설명해 보세요.

props에 있는 index와 onClick을 편하게 사용하기 위한 선언


> `ClickButton.jsx`를 참고해서,
> `Main.jsx`의 `<div className="container">`의 디자인을
> CSS 컴포넌트로 바꿔보세요.
```jsx
 const Container=styled.div`
    margin-left: 20vw;
    width: 60vw;
    background: #DDD;
    border-radius: 0.2rem;
    padding: 1.5rem;
    box-sizing: border-box;
    display: grid;
    height: 11rem;
    grid-template-columns: auto 2.5rem 1rem 8rem auto;
    grid-template-rows: 3rem 2.5rem 2.5rem;
  `
```
### 참고사항
- Styled component는 리액트의 기능이 아닙니다.
`styled-components` 패키지를 별도로 설치해야 하고,
`ClickButton.jsx`에서도 `styled`를 import하고 있습니다.
- Visual Studio Code를 사용중이라면
[플러그인](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)을 설치해 보세요.
Styled component 안의 CSS를 예쁘게 표시해줍니다.
- [Styled component 문서](https://www.styled-components.com/docs/basics#getting-started)

## 리액트로 페이지 만들어 보기
여러분은 이제 리액트의 기초 기능들은 모두 사용해 보았습니다. 와!!!👏👏👏👏

이번주의 강좌를 마무리하면서, 
오프라인 강좌에서 진행한 [할 일 목록 만들기](https://codepen.io/jungnoh/full/LYEZvyN)를 리액트로 만들어 보겠습니다.

필요한 컴포넌트들의 구조와 디자인은 `todo`폴더에 대부분 구현되어 있습니다. 여러분이 하셔야 할 일은
- 컴포넌트들을 props, state로 연결짓기
- 배열에서 요소를 넣고 빼기


### 참고사항
- 조금 어려울 수 있지만, 리액트를 어떻게 접근해야 하는지에 관한
[공식 문서](https://ko.reactjs.org/docs/thinking-in-react.html)를
읽어보세요.
- (힌트) 배열애서 요소를 제거할 때는
[splice 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)를
사용해보세요.
- 오프라인 강좌에서 사용한 코드를 참고해가면서 작업하세요. 단, DOM을 직접 조작하지는 말아야 합니다!
- 완성해지 못해도 괜찮으니, 일요일까지 최대한 구현해 보세요.
