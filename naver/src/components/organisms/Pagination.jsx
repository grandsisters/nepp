import React from "react";
import styled, { css } from "styled-components";

const Pagination = ({ currentPage, total, onChange }) => {
  const lastPage = Math.ceil(total / 10);
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <PageList>
      {currentPage > 1 && (
        <BtnPage
          onClick={() => {
            onChange(currentPage - 1);
          }}
        >
          이전
        </BtnPage>
      )}
      {pageList.map((page) => (
        <BtnPage active={currentPage === page} key={page} onClick={() => onChange(page)}>
          {page}
        </BtnPage>
      ))}
      {currentPage < lastPage && (
        <BtnPage
          onClick={() => {
            onChange(currentPage + 1);
          }}
        >
          다음
        </BtnPage>
      )}
    </PageList>
  );
};

const PageList = styled.ul`
  display: flex;
  justify-content: center;
`;

const BtnPage = styled.button`
  ${(props) =>
    props.active &&
    css`
      font-weight: bolder;
      background: aqua;
    `}
`;

export default Pagination;
