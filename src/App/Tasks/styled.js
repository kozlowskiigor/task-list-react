import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 10px;
  grid-gap: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray};

  ${({ hidden }) => hidden && css`
    display: none;
  `};
`;

export const Content = styled.span`
  padding-top: 4px;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `};
`;

export const Button = styled.button`
  padding: 0px;
  border: none;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: filter 0.5s;

  ${({ toggleDone }) => toggleDone && css`
    background: ${({ theme }) => theme.color.green};

    &:hover {
      filter: brightness(110%);
    };

    &:active {
      filter: brightness(90%);
    };
  `};

  ${({ remove }) => remove && css`
      background: ${({ theme }) => theme.color.red};

    &:hover {
      filter: brightness(110%);
    };

    &:active {
      filter: brightness(90%);
    };
  `};
`;