import React from 'react'

import { Header } from './Components/Header'
import { LeftContent } from './Components/LeftContent'
import { RightContent } from './Components/RightContent'

export function App() {
  return (
    <div className="min-h-screen w-screen bg-background">
      <Header />
      <div className="mx-auto flex h-full max-h-full max-w-screen-2xl flex-col gap-4 overflow-hidden px-4 py-4 md:flex-row lg:gap-8 lg:py-8 lg:px-10 ">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}
