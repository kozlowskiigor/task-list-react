import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  };
`;

export const Input = styled.input`
  border-color: ${({ theme }) => theme.color.gray};
  border-style: solid;
  padding: 10px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: transform 1s, filter 0.5s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  };

  &:active {
    filter: brightness(90%);
  };
`;