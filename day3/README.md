# 3일차
> `index.css`를 참고해서, Name List 제목이 파란색이 되도록 `className`를 수정해 보세요.
- `<span className="title blue-text">Name List</span>`

> addClick 핸들러를 수정해서 `nameList`에 이름이 추가되도록 수정하세요.

> [이 문서를 읽고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
> 10번 라인의 `...nameList`가 어떤 기능인지 설명하세요.
- 원래의 nameList 배열 안의 값들을 인자로써 넘긴다. 즉, 배열 끝에 새로운 인자를 push_back 한다.

> 리액트에서 리스트를 어떻게 처리하는지 [리액트 공식문서](https://ko.reactjs.org/docs/lists-and-keys.html)를 읽어보고,
> nameList의 내용이 `<NameDisplay />`들로 출력되게 수정하세요.

> `NameDisplay`의 구현을 참고해서, `EmptyNameDisplay`를 사용하면서
> `NameDisplay`를 사용할 때와 똑같이 출력되도록 `Main`을 수정하세요.