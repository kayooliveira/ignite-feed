import React from 'react'
import { AiFillCamera, AiFillHeart, AiFillVideoCamera } from 'react-icons/ai'

import { authUser } from '../../utils/mock'

export function NewPost() {
  return (
    <>
      <div className="rounded-lg border-[1px] border-gray-500/20 p-8">
        <textarea
          placeholder={`O que está pensando, ${authUser.name.split(' ')[0]}?`}
          className="w-full resize-none rounded-lg border-[1px] border-primary/50 bg-background p-4 font-bold text-gray-500  outline-none ring-2 ring-transparent ring-offset-2 ring-offset-background focus:border-transparent focus:ring-secondary"
        ></textarea>
        <div className="flex w-full flex-row items-center justify-evenly gap-4 py-4 text-gray-500">
          <button className="flex items-center text-xl font-bold transition-colors hover:text-gray-700">
            <AiFillCamera className="mr-3 h-10 w-10" />
            Foto/Video
          </button>
          <button className="flex items-center text-xl font-bold transition-colors hover:text-gray-700 ">
            <AiFillVideoCamera className="mr-3 h-10 w-10" /> Live
          </button>
          <button className="hidden items-center text-xl font-bold transition-colors hover:text-gray-700 md:flex ">
            <AiFillHeart className="mr-3 h-10 w-10" /> Sentimento
          </button>
        </div>
      </div>
    </>
  )
}
