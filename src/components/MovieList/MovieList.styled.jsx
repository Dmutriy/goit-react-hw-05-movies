import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

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

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 11%;
  margin-left: 0 auto;
`;

export const LinkTitle = styled(Link)`
  text-decoration: underline;
  color: black;
  font-weight: 500;
  font-size: 20px;
  color: black;
  :hover {
    color: #32badf;
  }
`;

export const MovieItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
