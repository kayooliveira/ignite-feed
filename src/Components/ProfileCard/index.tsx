import Parser from 'html-react-parser'
import React from 'react'
import { RiPencilLine } from 'react-icons/ri'

import { UserInputTypes } from '../../@types'
import stateBackground from '../../Assets/img/user-profile-bg.png'
import { AuthActions } from '../../Contexts/AuthContext'
import { useAuth } from '../../Hooks/useAuth'
import { EditProfileModal } from './Modal'

export function ProfileCard() {
  const { state, dispatch } = useAuth()

  function handleUpdateUser(inputs: UserInputTypes) {
    dispatch({
      type: AuthActions.setName,
      payload: inputs.name
    })
    dispatch({
      type: AuthActions.setJob,
      payload: inputs.job
    })
    dispatch({
      type: AuthActions.setCompany,
      payload: inputs.company
    })
    dispatch({
      type: AuthActions.setProfilePhoto,
      payload: inputs.profilePhoto
    })
    dispatch({
      type: AuthActions.setId,
      payload: state.id + 1
    })
  }

  return (
    <>
      <div className="mx-auto h-fit w-full min-w-[200px] overflow-hidden rounded-lg bg-backgroundLight md:w-64">
        <header id="state-pictures" className="w-full">
          <div className="z-10">
            <img
              src={stateBackground}
              alt="state Profile Background"
              className="w-full lg:w-auto"
            />
          </div>
          <div className="relative z-20 mx-auto -my-8 w-fit rounded-lg border-2 border-primary bg-backgroundLight p-1 transition-all hover:-translate-y-1 hover:cursor-pointer">
            <img
              src={state.profilePhoto}
              alt="state Profile Photo"
              className="w-24 md:w-16"
            />
          </div>
        </header>
        <div
          id="state-info"
          className="my-8 w-full py-2 text-center text-white"
        >
          <p className="text-lg">{state.name}</p>
          <span className="-my-2 text-xs text-gray-600">
            {state.job}
            {state.company && Parser(` | <strong>${state.company}</strong>`)}
          </span>
        </div>
        <hr className="m-0 border-gray-600"></hr>
        <div id="state-edit" className="py-6 px-2">
          <EditProfileModal
            user={state}
            trigger={
              <button className="mx-auto block rounded-lg border-[1px] border-primary p-3 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white md:text-base">
                <RiPencilLine className="inline-block" /> Mude seu perfil
              </button>
            }
            handleUpdateUser={handleUpdateUser}
          />
        </div>
      </div>
    </>
  )
}
