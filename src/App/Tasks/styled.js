import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 20px 30px;
  background-color: white;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 10px;
  grid-gap: 10px;
  border-bottom: 2px solid #eee;

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
  color: white;
  cursor: pointer;
  transition: background 1s;

  ${({ toggleDone }) => toggleDone && css`
  background: hsl(120, 62%, 35%);

    &:hover {
      background: hsl(120, 62%, 40%);
    };

    &:active {
      background: hsl(120, 62%, 25%);
    };
  `};

  ${({ remove }) => remove && css`
      background: hsl(348, 83%, 45%);

    &:hover {
      background: hsl(348, 83%, 40%);
    };

    &:active {
      background: hsl(348, 83%, 60%);
    };
    
  `};
`;