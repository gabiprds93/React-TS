import React from 'react'

import {OptionType} from '../../types/Option'

interface ISelectProps {
  options: OptionType[],
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<ISelectProps> = ({options, onChange}) => {
  return(
    <select onChange={onChange} >
      {options.map((item: OptionType, index: number) => {
        return(
          <option key={index} value={item.value} selected={item.selected}>{item.text}</option>
        )
      })}
    </select>
  )
}

export default Select