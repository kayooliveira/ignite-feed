import { format, formatDistanceToNow, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React, { useState } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

import { CommentType } from '../../@types'
import { useAuth } from '../../Hooks/useAuth'
import { state } from '../../utils/mock'
import { Modal } from './Modal'

interface IComment {
  comment: CommentType
  handleDeleteComment: (id: number) => void
}

export function Comment({ comment, handleDeleteComment }: IComment) {
  const { createdAt, author, content, likes } = comment
  const { state } = useAuth()
  const [commentLikes, setCommentLikes] = useState(likes)
  const [isCommentLiked, setIsCommentLiked] = useState(false)

  function deleteComment() {
    handleDeleteComment(comment.id)
  }

  function likeComment() {
    if (!isCommentLiked) {
      setCommentLikes(state => {
        return state + 1
      })
      return setIsCommentLiked(true)
    }
    setCommentLikes(state => {
      return state - 1
    })
    setIsCommentLiked(false)
  }

  const commentFormattedDate = format(createdAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const commentFormattedDateFromNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
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
        <header className="flex flex-wrap items-center">
          <img
            className="mr-3 h-8 w-8 md:hidden"
            src={author.profilePhoto}
            alt={author.name + ' profile photo'}
          />
          <div>
            <p className="-mb-2 font-bold text-white">{author.name}</p>
            <time
              dateTime={formatISO(createdAt)}
              title={commentFormattedDate}
              className="-mt-2 text-xs text-gray-600"
            >
              {commentFormattedDateFromNow}
            </time>
          </div>
        </header>
        <h4 className="mt-5 text-white ">{content}</h4>
        {author.id === state.id && (
          <Modal
            onSuccess={deleteComment}
            trigger={
              <>
                <span
                  title="Deletar comentário"
                  className="absolute right-4 top-4 cursor-pointer text-gray-600 transition-colors hover:text-red-500"
                >
                  <FaTrash />
                </span>
              </>
            }
          />
        )}
        <div className="absolute -bottom-8  left-0 w-full text-xs font-bold md:text-lg">
          <button
            onClick={likeComment}
            className={`flex cursor-pointer items-center transition-colors hover:text-primary ${
              isCommentLiked ? 'text-primary' : 'text-gray-600'
            } `}
          >
            {isCommentLiked ? (
              <AiFillLike className="mr-1 h-6 w-6" />
            ) : (
              <AiOutlineLike className="mr-1 h-6 w-6" />
            )}
            Aplaudir • {commentLikes}
          </button>
        </div>
      </div>
    </div>
  )
}
