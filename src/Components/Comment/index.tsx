import React from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

import { CommentType } from '../../@types'
import { authUser } from '../../utils/mock'
import { Modal } from './Modal'

export function Comment(comment: CommentType) {
  return (
    <>
      <div className="my-8 flex">
        <div id="comment-author-profile-photo" className="hidden md:block">
          <img
            src={comment.author.profilePhoto}
            alt={comment.author.name + ' profile photo'}
          />
        </div>
        <div
          id="comment-info"
          className="relative ml-3 mb-6 flex w-full flex-col rounded-lg bg-backgroundComment p-4"
        >
          <div className="flex flex-wrap items-center">
            <img
              className="mr-3 h-8 w-8 md:hidden"
              src={comment.author.profilePhoto}
              alt={comment.author.name + ' profile photo'}
            />
            <div>
              <p className="-mb-2 font-bold text-white">
                {comment.author.name}
              </p>
              <span className="-mt-2 text-xs text-gray-600">
                {comment.createdAt}
              </span>
            </div>
          </div>
          <h4 className="mt-5 text-white ">{comment.content}</h4>
          {comment.author.id === authUser.id && (
            <Modal
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
            {comment.author.id === authUser.id ? (
              <span className="flex cursor-pointer items-center text-white">
                <AiOutlineLike className="mr-1 h-6 w-6  fill-white" />
                Aplaudir • {comment.likes}
              </span>
            ) : (
              <span className="flex cursor-pointer items-center text-primary">
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
