import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import Title from '../components/atoms/Title';
import Description from '../components/atoms/Description';
import Select from '../components/atoms/Select';
import {changeLanguage} from '../redux/actions/languageAction'

const langOptions = [ 
  {
    value: 'es',
    text: 'Español',
    selected: true
  },
  {
    value: 'en',
    text: 'English',
    selected: false
  }
]

const HomeContainer: React.FC<any> = ({changeLanguage}) => {
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
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      
      <Select 
        options={langOptions} 
        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value)}
      />
      
    </div>
  )
}

const mapDispatchToProps = { changeLanguage }


export default connect(null, mapDispatchToProps)(HomeContainer)