import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import Title from '../components/atoms/Title';
import Description from '../components/atoms/Description';
import Select from '../components/atoms/Select';
import {changeLanguage} from '../redux/actions/languageAction';
import { getMoviesList } from '../redux/actions/moviesAction';
import { AppState } from '../redux/reducers';

const MoviesContainer: React.FC<any> = ({changeLanguage, getMoviesList}) => {
  React.useEffect(() => {
    getMoviesList()
    handleChange('es')
  }, [])

  const { t, i18n } = useTranslation();

  const handleChange = (lng: string) => {
    changeLanguage(lng)
    i18n.changeLanguage(lng);
  };

  return(
    <div>
      <Title>{t('moviesTitle')}</Title>
      <Description>{t('moviesDescription')}</Description>
      
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  movies: state.movies
})

const mapDispatchToProps = { changeLanguage, getMoviesList }

export default connect(null, mapDispatchToProps)(MoviesContainer)