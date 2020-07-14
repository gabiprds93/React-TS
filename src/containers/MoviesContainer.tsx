import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import Title from '../components/atoms/Title';
import Description from '../components/atoms/Description';
import MoviesList from '../components/organisms/MoviesList';
import { getMoviesList } from '../redux/actions/moviesAction';
import { AppState } from '../redux/reducers';

const MoviesContainer: React.FC<any> = ({getMoviesList, movies}) => {
  React.useEffect(() => {
    getMoviesList()
  }, [])

  const { t } = useTranslation();

  return(
    <div>
      <Title>{t('moviesTitle')}</Title>
      <Description>{t('moviesDescription')}</Description>
      {!movies.isLoading && movies.data && (
        <MoviesList movies={movies.data}></MoviesList> 
      )}
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  movies: state.movies
})

const mapDispatchToProps = { getMoviesList }

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)