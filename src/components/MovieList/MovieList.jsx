import { useLocation } from 'react-router-dom';
import {
  ListContainer,
  MovieItem,
  LinkTitle,
  Container,
} from './MovieList.styled';
import PropTypes from 'prop-types';
import noImage from '../image/no-image.jpg';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w300';

  return (
    <Container>
      <ListContainer>
        {movies.map(({ id, original_title, poster_path }) => (
          <MovieItem key={id}>
            <LinkTitle to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={poster_path ? `${baseURL}${poster_path}` : noImage}
                alt={original_title}
                width="300"
              />

              {original_title}
            </LinkTitle>
          </MovieItem>
        ))}
      </ListContainer>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
