import React, { useState } from 'react'

interface IModal {
  trigger: JSX.Element
  onSuccess: () => void
}

export function Modal({ trigger, onSuccess }: IModal) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    setIsOpen(!isOpen)
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
            <h2 className="mb-4 text-center text-3xl font-bold text-white">
              Excluir comentário
            </h2>
            <p className="text-center text-lg text-white">
              Você tem certeza que gostaria de excluir esse comentário?
            </p>
            <div className="mt-8 flex justify-center gap-2">
              <button
                onClick={toggleModal}
                className="rounded-lg py-4 px-8 text-center font-bold text-white transition-colors hover:bg-backgroundComment focus:bg-backgroundComment"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onSuccess()
                  toggleModal()
                }}
                autoFocus
                className="rounded-lg py-4 px-8 text-center font-bold text-red-500 transition-colors hover:bg-background focus:bg-backgroundComment"
              >
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
