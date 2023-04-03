import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  color: hsl(180, 100%, 25%);
  border: none;
  margin: 0 15px;
  transition: color 0.5s;
  cursor: pointer;
  padding: 2px 5px;

  &:hover {
  color: hsl(180, 100%, 35%);
  };

  &:disabled {
  color: #ccc;
  };

  @media (max-width: 767px) {
    margin: 10px;
    width: 100%;
  };
`;