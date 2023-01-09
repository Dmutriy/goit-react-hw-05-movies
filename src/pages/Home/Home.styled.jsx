import styled from 'styled-components';

// export const Container = styled.section`
//   padding: 16px 32px;
// `;

export const Title = styled.h1`
  font-size: 500;
  font-size: 32px;
  margin-bottom: 16px; ;
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 32px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
