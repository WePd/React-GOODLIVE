import React from 'react'
import CityHeader from '../../components/CityHeader'
import CityNow from './CityNow'
import CityList from './CityList'

export default function City() {
  return (
    <div>
      <CityHeader title='城市选择' />
      <CityNow />
      <CityList />
    </div>
  )
}

