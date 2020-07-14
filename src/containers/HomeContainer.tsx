import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Title from '../components/atoms/Title';
import SelectLangContainer from './SelectLangContainer';
import {changeLanguage} from '../redux/actions/languageAction';

const HomeContainer = () => {
  React.useEffect(() => {
    handleChange('es')
  }, [])

  const { t, i18n } = useTranslation();

  const handleChange = (lng: string) => {
    changeLanguage(lng)
    i18n.changeLanguage(lng);
  };

  return(
    <div>
      <Title>{t('homeTitle')}</Title>
      <SelectLangContainer />
      <br/>
      <Link to='/movies'>{t('link')}</Link>
    </div>
  )
}

export default HomeContainer