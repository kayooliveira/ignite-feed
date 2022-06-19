import React, { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { UserType } from '..'

type State = UserType

const AuthInitialData = {
  id: 10,
  name: 'Kayo Oliveira',
  profilePhoto: 'https://github.com/kayooliveira.png',
  job: 'Full Cycle DEV',
  company: 'Life.Vet'
} as State

type Action = {
  type: AuthActions
  payload: any
}

type AuthContextType = {
  state: State
  dispatch: Dispatch<Action>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export enum AuthActions {
  setId,
  setName,
  setProfilePhoto,
  setJob,
  setCompany
}

const AuthReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case AuthActions.setId:
      return {
        ...state,
        id: action.payload
      }
    case AuthActions.setCompany:
      return {
        ...state,
        company: action.payload
      }
    case AuthActions.setName:
      return {
        ...state,
        name: action.payload
      }
    case AuthActions.setJob:
      return {
        ...state,
        job: action.payload
      }
    case AuthActions.setProfilePhoto:
      return {
        ...state,
        profilePhoto: action.payload
      }
    default: {
      return state
    }
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialData)
  const value = { state, dispatch }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
