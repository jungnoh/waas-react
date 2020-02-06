# 3일차 과제
## 목표
- className 속성을 사용해 본다.
- for문을 활용해 리스트를 컴포넌트로 출력한다.
- props.children를 이해하고 사용해 본다.

## className

`name-list` 폴더로 이동해서 패키지를 설치하고 실행해 봅시다.
```bash
$ npm i
$ npm run dev
```
저번 예제와 달리, 디자인이 조금 들어있습니다. 우선 CSS가 어디 정의되어 있는지 살펴봅시다.
`index.html`을 열어보면, 5번 라인에서 `index.css`를 불러오는 것을 볼 수 있습니다.
따라서 디자인은 `index.css`에 정의되어 있습니다.

이제 `components/Main.jsx`를 보면, `className`이라는 속성을 주어 클래스를 설정하고 있습니다.
HTML과 달리, 리액트는 `className` 속성을 사용합니다.

> `index.css`를 참고해서, Name List 제목이 파란색이 되도록 `className`를 수정해 보세요.
```html
<span className="title blue-text">Name List</span>
```

## for문으로 리스트 출력하기

다시 `components/Main.jsx`를 살펴봅시다.
이름 목록을 저장하는 state가 정의되어 있고, 목록에 새로운 값을 추가하는 addName 함수도 정의되어 있습니다.
2장에서 한것과 비슷한 `NameInput` 컴포넌트도 있습니다.

하지만 Add 버튼을 눌렀을 때 `nameList`에 값이 저장되지 않고, `nameList`에 저장된 값도 출력되는 리스트에 반영되지 않고 있습니다.
작동하도록 코드를 수정해봅시다.

> addClick 핸들러를 수정해서 `nameList`에 이름이 추가되도록 수정하세요.
```javascript
const onAddClick = (name) => {
    addName(name);
};
```

> [이 문서를 읽고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
> 10번 라인의 `...nameList`가 어떤 기능인지 설명하세요.
- List 안의 원소들을 나열하는 기능

> 리액트에서 리스트를 어떻게 처리하는지 [리액트 공식문서](https://ko.reactjs.org/docs/lists-and-keys.html)를 읽어보고,
> nameList의 내용이 `<NameDisplay />`들로 출력되게 수정하세요.
```javascript
const listItems = nameList.map((name, index) => 
    <NameDisplay key={index} name={name} />
);

return (
    <div className="container">
        <span className="title blue-text">Name List</span>
        <NameInput addClick={onAddClick} />
        <div className="list-container">
        {listItems}
        </div>
    </div>
);
```

- 실행했을 때 Console 창에서 key와 관련된 경고가 뜨지 않아야 합니다. (어떻게 수정해야 할까요? 오류 메세지를 잘 읽어보세요)
- [추가 설명](https://m.blog.naver.com/gi_balja/221245300411)

## props.children

지금까지는 prop으로 스트링이나 숫자 같은 값들만 전달했습니다.
Prop에 컴포넌트를 통째로 넣어줄 수 없을까요? 가능합니다.

어떤 속성으로던 컴포넌트를 넘겨줄 수 있지만, `children` 속성의 경우 기능이 특별합니다.
[이 문서](https://blog.coderifleman.com/2015/06/24/learning-react-2/#Props-children)의 코드를 읽어보세요.

돌아와서 `components/EmptyNameDisplay.jsx`를 읽어보면, 뭔가 텅 비어있습니다.
이제 `Main`에서 `NameDisplay`를 `EmptyNameDisplay`로 바꿔봅시다.

> `NameDisplay`의 구현을 참고해서, `EmptyNameDisplay`를 사용하면서
> `NameDisplay`를 사용할 때와 똑같이 출력되도록 `Main`을 수정하세요.
