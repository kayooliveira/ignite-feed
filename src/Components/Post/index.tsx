import React, { useState } from 'react'
import Parser from 'react-html-parser'

import { Post as PostType } from '../../@types'
import { Comment } from '../Comment'

export function Post(post: PostType) {
  const [comment, setComment] = useState<string>('')
  return (
    <>
      <div className="rounded-lg bg-backgroundLight p-8">
        <div id="post-header" className="flex flex-wrap">
          <div className="w-fit cursor-pointer rounded-lg border-2 border-primary bg-backgroundLight p-1 transition-all hover:-translate-y-1">
            <img
              src={post.author.profilePhoto}
              alt={post.author.name + ' profile photo'}
            />
          </div>
          <div id="author-info" className="ml-3 flex flex-col">
            <p className="cursor-pointer text-lg font-bold text-white">
              {post.author.name}
            </p>
            <span className="cursor-pointer  text-sm text-gray-600">
              {post.author.job}
            </span>
          </div>
        </div>
        <h4 id="post-content" className="my-4 text-white">
          {Parser(post.content)}
        </h4>
        <hr className="border-gray-600" />
        <div id="post-reply">
          <p className="my-4 text-lg font-bold text-white">
            Deixe seu feedback
          </p>
          <textarea
            value={comment}
            onChange={e => {
              setComment(e.target.value)
            }}
            className="w-full resize-none rounded-lg border-[1px] border-primary bg-background p-4 text-white outline-none ring-2 ring-transparent ring-offset-2 ring-offset-backgroundLight focus:border-transparent focus:ring-secondary"
          ></textarea>
          {comment.trim() !== '' && (
            <button className="my-4 rounded-lg bg-primary p-3 text-lg font-bold text-white transition-all hover:bg-secondary">
              Publicar
            </button>
          )}
        </div>
        {post.comments.map(comment => (
          <Comment
            key={comment.author.name}
            author={comment.author}
            content={comment.content}
            likes={comment.likes}
            createdAt={comment.createdAt}
          />
        ))}
      </div>
    </>
  )
}
