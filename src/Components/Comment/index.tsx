import React from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

import { CommentType } from '../../@types'
import { authUser } from '../../utils/mock'

export function Comment(comment: CommentType) {
  return (
    <>
      <div className="my-8 flex ">
        <div id="comment-author-profile-photo">
          <img
            src={comment.author.profilePhoto}
            alt={comment.author.name + ' profile photo'}
          />
        </div>
        <div
          id="comment-info"
          className="relative ml-3 mb-6 flex w-full flex-col rounded-lg bg-backgroundComment p-4"
        >
          <p className="font-bold text-white">{comment.author.name}</p>
          <span className="text-xs text-gray-600">{comment.createdAt}</span>
          <h4 className="mt-5 text-white ">{comment.content}</h4>
          {comment.author.name === authUser.name && (
            <span className="absolute right-4 cursor-pointer text-primary">
              <FaTrash />
            </span>
          )}
          <div className="absolute -bottom-8 left-0 flex w-full items-center text-lg font-bold">
            {comment.author.id === authUser.id ? (
              <span className="flex cursor-pointer text-white">
                <AiOutlineLike className="mr-1 h-6 w-6  fill-white" />
                Aplaudir • {comment.likes}
              </span>
            ) : (
              <span className="flex cursor-pointer text-primary">
                <AiFillLike className="mr-1 h-6 w-6  fill-primary" />
                Aplaudir • {comment.likes}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
