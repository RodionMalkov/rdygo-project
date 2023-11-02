import React from 'react'

import Logo from './logo'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__logo'>
              <Logo />
            </div>
            <nav className='header__nav'>
              <a className='header__nav-link'>Услуги</a>
              <a className='header__nav-link'>Контакты</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header