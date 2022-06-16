import React from 'react'
import { RiPencilLine } from 'react-icons/ri'

import userBackground from '../../Assets/img/user-profile-bg.png'
import { authUser } from '../../utils/mock'

export function LeftContent() {
  return (
    <>
      <aside className="h-fit w-64 overflow-hidden rounded-lg bg-backgroundLight">
        <div id="user-pictures" className="w-full">
          <div className="z-10">
            <img src={userBackground} alt="User Profile Photo" />
          </div>
          <div className="relative z-20 mx-auto -my-8 w-fit rounded-lg border-2 border-primary bg-backgroundLight p-1 transition-all hover:-translate-y-1 hover:cursor-pointer">
            <img src={authUser.profilePhoto} alt="User Profile Photo" />
          </div>
        </div>
        <div id="user-info" className="my-8 w-full py-2 text-center text-white">
          <p className="text-lg">{authUser.name}</p>
          <span className="-my-2 text-xs text-gray-600">{authUser.job}</span>
        </div>
        <hr className="m-0 border-gray-600"></hr>
        <div id="user-edit" className="py-6">
          <button className="mx-auto block rounded-lg border-[1px] border-primary p-3 font-bold text-primary transition-colors hover:border-secondary hover:text-secondary">
            <RiPencilLine className="inline-block" /> Edite seu perfil
          </button>
        </div>
      </aside>
    </>
  )
}
