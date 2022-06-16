import React from 'react'

import logo from '../../Assets/img/logo.svg'

export function Header() {
  return (
    <>
      <header className="flex h-24 w-full items-center justify-center bg-backgroundLight shadow-md">
        <img src={logo} alt="Ignite Logo Purple" />
        <h1 className="ml-2 text-3xl font-bold text-white">Ignite Feed</h1>
      </header>
    </>
  )
}
