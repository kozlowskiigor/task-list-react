import styled from "styled-components";

export const FirstSection = styled.section`
  background-color: white;
  border-bottom: 10px solid #eee;
`;

export const Header = styled.header`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  border-bottom: 3px solid #eee;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0;
  };
`;

export const SectionTitle = styled.h2`
  padding: 10px 20px;
  margin: 0;
`;