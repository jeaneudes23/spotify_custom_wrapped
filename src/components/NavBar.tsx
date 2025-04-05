import React from 'react'
import { InfoPicker } from './InfoPicker'

export const NavBar = () => {
  return (
    <div className='h-navbar flex justify-center gap-4 mx-4'>
      <span className='basis-1/5'></span>
      <InfoPicker />
      <span className='basis-1/5'></span>
    </div>
  )
}

