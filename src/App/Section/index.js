import { FirstSection, Header, SectionTitle } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <FirstSection>
    <Header>
      <SectionTitle>
        {title}
      </SectionTitle>
      {extraHeaderContent}
    </Header>
    {body}
  </FirstSection>
);