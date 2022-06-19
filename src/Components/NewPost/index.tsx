import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiFillCamera, AiFillHeart, AiFillVideoCamera } from 'react-icons/ai'

import { useAuth } from '../../Hooks/useAuth'

interface NewPostProps {
  handleCreateNewPost: (content: string) => void
}

export function NewPost({ handleCreateNewPost }: NewPostProps) {
  const [postInput, setPostInput] = useState('')

  const { state } = useAuth()

  function handleChangePostInput(e: ChangeEvent<HTMLTextAreaElement>) {
    const input = e.target.value
    setPostInput(input)
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleCreateNewPost(postInput)
    setPostInput('')
  }

  return (
    <>
      <div className="rounded-lg border-[1px] border-gray-500/20 p-8">
        <form onSubmit={handleFormSubmit}>
          <textarea
            value={postInput}
            onChange={handleChangePostInput}
            placeholder={`O que está pensando, ${state.name.split(' ')[0]}?`}
            className="w-full resize-none rounded-lg border-[1px] border-primary/50 bg-background p-4 font-bold text-gray-600 placeholder-gray-600  outline-none ring-2 ring-transparent ring-offset-2 ring-offset-background focus:border-transparent focus:ring-secondary"
          ></textarea>
          <div className="flex w-full flex-row items-center justify-evenly gap-4 py-4 text-gray-600">
            <button
              disabled
              title="Adicionar uma foto ou vídeo (em breve)"
              type="button"
              className="new-post-action"
            >
              <AiFillCamera className="mr-3 h-10 w-10" />
              Foto/Video
            </button>
            <button
              disabled
              type="button"
              title="Abrir uma live (em breve)"
              className="new-post-action"
            >
              <AiFillVideoCamera className="mr-3 h-10 w-10" /> Live
            </button>
            <button
              disabled
              type="button"
              title="Adicionar um sentimento (em breve)"
              className="new-post-action-hidden"
            >
              <AiFillHeart className="mr-3 h-10 w-10" /> Sentimento
            </button>
          </div>
          {postInput.trim() !== '' && (
            <button
              type="submit"
              title="Publicar"
              className="my-4 rounded-lg bg-primary p-3 text-lg font-bold text-white transition-all hover:bg-secondary"
            >
              Publicar
            </button>
          )}
        </form>
      </div>
    </>
  )
}
