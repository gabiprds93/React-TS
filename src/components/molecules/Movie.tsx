import React from 'react'

import MovieModel from '../../models/Movie'

interface MovieProps {
  movie: MovieModel
}

const Movie: React.FC<MovieProps> = ({movie}) => {
  return(
    <div>
      <p>{movie.title}</p>
      <p>{movie.releaseYear}</p>
    </div>
  )
}

export default Movie