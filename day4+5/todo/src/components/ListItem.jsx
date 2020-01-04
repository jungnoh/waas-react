import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * ListItem 컴포넌트: 할 일 목록의 요소를 정의합니다.
 * ### prop 정의
 * - value: 목록 요소의 값 (`string`)
 * - showComplete: '완료' 버튼을 표시할 지 여부 (`boolean`)
 * - onDelete: 삭제 버튼 클릭 핸들러 함수 (`() => any`)
 * - onComplete: 완료 버튼 클릭 핸들러 함수 (`() => any`)
 * - done: 완료된 항목인지 여부 (`boolean`)
 */
const ListItem = (props) => {
  const {value, showComplete, onDelete, onComplete, done} = props;  
  const Container = styled.div`
    padding: 1em 0.5em;
    border-radius: 0.4em;
    font-size: 0.9rem;
    margin-bottom: 0.2em;
    border-bottom: 1px solid #ddd;
    .action {
      color: #333;
      float: right; 
      margin: 0 0.2em;
      user-select: none;
    }
    .action-delete:hover {
      color: #cc0000;
    }
    .action-done:hover {
      color: #009900;
    }
    span:nth-child(1) {
      text-decoration: ${done ? 'line-through' : 'none'};
    }
  `;
  return (
    <Container>
      <span>{value}</span>
      { showComplete ? <span className="action action-done" onClick={()=>onComplete(props.index)}>완료</span> : "" }
      <span className="action action-delete" onClick={()=>onDelete(done,props.index)}>삭제</span>
    </Container>
  );
};

export default ListItem;
