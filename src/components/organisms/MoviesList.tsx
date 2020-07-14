import React from 'react'

import MovieModel from '../../models/Movie'
import Movie from '../molecules/Movie'

interface IMoviesListProps {
  movies: MovieModel[];
}

const MoviesList: React.FC<IMoviesListProps> = ({movies}) => {
  console.log(movies)
  return(
    <ul>
      {movies.map((item, index) => {
        return(
          <li key={index}>
            <Movie movie={item}></Movie>
          </li>
        )
      })}
    </ul>
  )
}

export default MoviesList;