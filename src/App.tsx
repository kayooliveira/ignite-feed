import React from 'react'

import { Header } from './Components/Header'
import { LeftContent } from './Components/LeftContent'
import { RightContent } from './Components/RightContent'

export function App() {
  return (
    <div className="min-h-screen w-screen bg-background">
      <Header />
      <div className="flex h-full max-h-full flex-shrink-0 gap-8 px-40 py-8">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}
