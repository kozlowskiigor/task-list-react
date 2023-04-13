import styled from "styled-components";

const Main = styled.main`
  padding: 20px;
`;

export const Container = ({ children }) => (
  <Main>
    {children}
  </Main>
);