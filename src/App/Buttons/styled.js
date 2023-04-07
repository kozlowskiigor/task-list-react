import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  margin: 0 15px;
  transition: filter 0.5s;
  cursor: pointer;
  padding: 2px 5px;

  &:hover {
    filter: brightness(110%);
  };

  &:active {
    filter: brightness(90%);
  };

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  };

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 10px;
    width: 100%;
  };
`;