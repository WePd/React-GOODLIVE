import React, { useState } from 'react'
import CityHeader from '../../components/CityHeader'
import CityNow from './CityNow'
import CityList from './CityList'

export default function City() {
  const [city, setCity] = useState('成都')

  //! 这个地方是否可以使用useContext

  const cuerrentCity = (city) => {
    setCity(city)
  }
  return (
    <div>
      <CityHeader title='城市选择' />
      <CityNow city={city} />
      <CityList onEvent={cuerrentCity} />
    </div>
  )
}

