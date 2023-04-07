import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  border-bottom: 10px solid ${({ theme }) => theme.color.gray};
`;

export const Header = styled.header`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  border-bottom: 3px solid ${({ theme }) => theme.color.gray};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 0;
  };
`;

export const SectionTitle = styled.h2`
  padding: 10px 20px;
  margin: 0;
`;