# 3일차 과제
> `index.css`를 참고해서, Name List 제목이 파란색이 되도록 `className`를 수정해 보세요.
```jsx
<span className="title blue-text">Name List</span>
```
## for문으로 리스트 출력하기

다시 `components/Main.jsx`를 살펴봅시다.
이름 목록을 저장하는 state가 정의되어 있고, 목록에 새로운 값을 추가하는 addName 함수도 정의되어 있습니다.
2장에서 한것과 비슷한 `NameInput` 컴포넌트도 있습니다.

하지만 Add 버튼을 눌렀을 때 `nameList`에 값이 저장되지 않고, `nameList`에 저장된 값도 출력되는 리스트에 반영되지 않고 있습니다.
작동하도록 코드를 수정해봅시다.

> addClick 핸들러를 수정해서 `nameList`에 이름이 추가되도록 수정하세요.

onAddClick을 addName으로 변경
> [이 문서를 읽고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
> 10번 라인의 `...nameList`가 어떤 기능인지 설명하세요.

nameList배열을 원소별로 분해하여 전달
> 리액트에서 리스트를 어떻게 처리하는지 [리액트 공식문서](https://ko.reactjs.org/docs/lists-and-keys.html)를 읽어보고,
> nameList의 내용이 `<NameDisplay />`들로 출력되게 수정하세요.
```jsx
{nameList.map((Name,index) =>
     <NameDisplay key={index} name={Name}/>
)} 
```

## props.children

> `NameDisplay`의 구현을 참고해서, `EmptyNameDisplay`를 사용하면서
> `NameDisplay`를 사용할 때와 똑같이 출력되도록 `Main`을 수정하세요.
```jsx
<NameDisplay>
    {nameList.map((Name,index) =>
        <li key={index}>
            {Name}
        </li>
    )} 
</NameDisplay>
```