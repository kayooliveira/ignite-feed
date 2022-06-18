import { format, formatDistanceToNow, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

import { CommentType } from '../../@types'
import { authUser } from '../../utils/mock'
import { Modal } from './Modal'

interface IComment {
  comment: CommentType
  handleDeleteComment: (id: number) => void
}

export function Comment({ comment, handleDeleteComment }: IComment) {
  const { createdAt, author, content, likes } = comment

  const formattedDate = format(createdAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const formattedDateFromNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <>
      <div className="my-8 flex">
        <div id="comment-author-profile-photo" className="hidden md:block">
          <img
            src={author.profilePhoto}
            alt={author.name + ' profile photo'}
            className="w-16 rounded"
          />
        </div>
        <div
          id="comment-info"
          className="relative ml-3 mb-6 flex w-full flex-col rounded-lg bg-backgroundComment p-4"
        >
          <div className="flex flex-wrap items-center">
            <img
              className="mr-3 h-8 w-8 md:hidden"
              src={author.profilePhoto}
              alt={author.name + ' profile photo'}
            />
            <div>
              <p className="-mb-2 font-bold text-white">{author.name}</p>
              <time
                dateTime={formatISO(createdAt)}
                title={formattedDate}
                className="-mt-2 text-xs text-gray-600"
              >
                {formattedDateFromNow}
              </time>
            </div>
          </div>
          <h4 className="mt-5 text-white ">{content}</h4>
          {author.id === authUser.id && (
            <Modal
              onSuccess={() => {
                handleDeleteComment(comment.id)
              }}
              trigger={
                <>
                  <span className="absolute right-4 top-4 cursor-pointer text-primary">
                    <FaTrash />
                  </span>
                </>
              }
            />
          )}
          <div className="absolute -bottom-8  left-0 w-full text-xs font-bold md:text-lg">
            {author.id === authUser.id ? (
              <button className="flex cursor-pointer items-center text-white transition-colors hover:text-primary">
                <AiOutlineLike className="mr-1 h-6 w-6" />
                Aplaudir • {likes}
              </button>
            ) : (
              <button className="flex cursor-pointer items-center text-primary transition-colors hover:text-primary">
                <AiFillLike className="mr-1 h-6 w-6" />
                Aplaudir • {likes}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
