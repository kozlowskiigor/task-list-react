import { Wrapper, Header, SectionTitle } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </Header>
    {body}
  </Wrapper>
);