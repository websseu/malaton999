import React from 'react'
import HeaderLeft from './header-left'
import HeaderRight from './header-right'

export default function Header() {
  return (
    <header className='header__container'>
      <div className='flex items-center justify-between border-b border-gray-300/20 pb-4'>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  )
}
