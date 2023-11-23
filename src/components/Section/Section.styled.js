import styled from 'styled-components';

export const SectionContainer = styled('section')(() => {
  return {
    padding: '20px',
    '& h1': {
      fontSize: '24px',
      marginBottom: '12px',
    },
    '& h2': {
      fontSize: '18px',
      marginBottom: '8px',
    },
  };
});
