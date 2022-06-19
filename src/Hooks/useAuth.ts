import { useContext } from 'react'

import { AuthContext } from '../Contexts/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("This component haven't access to this context")
  }

  return context
}
