import styled from 'styled-components';

const Title = styled.header`
  font-size: 20px;
`;

export const Header = ({ title }) => (
  <Title>
    <h1>{title}</h1>
  </Title>
);