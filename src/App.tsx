import React from 'react'

import { Header } from './Components/Header'
import { LeftContent } from './Components/LeftContent'
import { RightContent } from './Components/RightContent'

export function App() {
  return (
    <div className="min-h-screen w-screen bg-background">
      <Header />
      <div className="mx-auto flex h-full max-h-full max-w-screen-2xl flex-shrink-0 flex-col gap-8 px-10 py-8 md:flex-row ">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}
