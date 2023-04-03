import styled from 'styled-components';

export const TasksForm = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  padding: 20px;

  @media (max-width:767px) {
    grid-template-columns: 1fr;
  };
`;

export const Input = styled.input`
  border-color: #eee;
  border-style: solid;
  padding: 10px;
`;

export const Button = styled.button`
  background: hsl(180, 100%, 25%);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: transform 1s, background 0.1s;

  &:hover {
  background: hsl(180, 100%, 30%);
  transform: scale(1.1);
  }

  &:active {
  background: hsl(180, 100%, 25%);
  }
`;