import React, { ChangeEvent, FormEvent, useState } from 'react'

import { UserInputTypes, UserType } from '../../../@types'

interface EditProfileModalProps {
  user: UserType
  handleUpdateUser: (inputs: UserInputTypes) => void
  trigger: JSX.Element
}

export function EditProfileModal({
  user,
  handleUpdateUser,
  trigger
}: EditProfileModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputs, setInputs] = useState<UserInputTypes>({
    company: user.company || '',
    job: user.job,
    name: user.name,
    profilePhoto: user.profilePhoto
  })

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  function handleChangeInputs(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleUpdateUser(inputs)
    toggleModal()
  }

  return (
    <>
      <div onClick={toggleModal}>{trigger}</div>
      {isOpen && (
        <div className="scroll fixed left-0 top-0 z-40 flex min-h-screen w-screen items-center justify-center bg-black/90">
          <div
            id="modal"
            className="relative w-[432px] rounded-lg bg-backgroundLight p-8"
          >
            <header>
              <h2 className="mb-6 text-center  text-2xl font-bold text-white">
                Edite suas informações, {user.name.split(' ')[0]}!
              </h2>
              <hr className="border-gray-600" />
            </header>
            <form onSubmit={handleSubmitForm}>
              <label
                htmlFor="name"
                className="my-6 block text-center font-bold uppercase text-primary"
              >
                Nome
              </label>
              <input
                onChange={handleChangeInputs}
                name="name"
                value={inputs.name}
                className="input"
              />
              <label
                htmlFor="job"
                className="my-6 block text-center font-bold uppercase text-primary"
              >
                Cargo
              </label>
              <input
                onChange={handleChangeInputs}
                name="job"
                value={inputs.job}
                className="input"
              />
              <label
                htmlFor="input"
                className="my-6 block text-center font-bold uppercase text-primary"
              >
                Empresa
              </label>
              <input
                onChange={handleChangeInputs}
                name="company"
                value={inputs.company}
                className="input"
              />
              <label
                htmlFor="profilePhoto"
                className="my-6 block text-center font-bold uppercase text-primary"
              >
                URL do perfil
              </label>
              <input
                onChange={handleChangeInputs}
                name="profilePhoto"
                value={inputs.profilePhoto}
                className="input"
              />
              <div className="mt-8 flex justify-center gap-2">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="rounded-lg py-4 px-8 text-center font-bold text-red-500 transition-colors hover:bg-background focus:bg-backgroundComment"
                >
                  Cancelar
                </button>
                <button
                  autoFocus
                  type="submit"
                  className="rounded-lg py-4 px-8 text-center font-bold text-green-500 transition-colors hover:bg-background focus:bg-backgroundComment"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
