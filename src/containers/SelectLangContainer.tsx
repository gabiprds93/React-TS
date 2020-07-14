import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import Select from '../components/atoms/Select';
import {changeLanguage} from '../redux/actions/languageAction';

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

const SelectLangContainer: React.FC<any> = ({changeLanguage}) => {


  const { i18n } = useTranslation();

  const handleChange = (lng: string) => {
    changeLanguage(lng)
    i18n.changeLanguage(lng);
  };

  return(
    <Select 
      options={langOptions} 
      onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value)}
    />
  )
}

const mapDispatchToProps = { changeLanguage }

export default connect(null, mapDispatchToProps)(SelectLangContainer)