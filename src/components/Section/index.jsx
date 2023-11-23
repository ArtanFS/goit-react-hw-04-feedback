import { SectionContainer } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
};
