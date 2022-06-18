import Parser from 'html-react-parser'
import React, { ChangeEvent, FormEvent, useState } from 'react'

import { CommentType, Post as PostType } from '../../@types'
import { authUser } from '../../utils/mock'
import { Comment } from '../Comment'

export function Post(post: PostType) {
  const [comments, setComments] = useState<CommentType[]>(post.comments)
  const [commentInput, setCommentInput] = useState<string>('')
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const input = e.target.value
    if (input.trim() !== '') {
      setCommentInput(e.target.value)
    }
  }

  function handleAddNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const commentsIds = comments.map(comment => comment.id)
    const highestId = Math.max(...commentsIds)

    const newComment = {
      id: highestId + 1,
      author: authUser,
      content: commentInput,
      createdAt: new Date(),
      likes: 0
    }
    setComments([...comments, newComment])
    setCommentInput('')
  }

  function handleDeleteComment(id: number) {
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <>
      <div className="rounded-lg bg-backgroundLight p-8">
        <div id="post-header" className="flex flex-wrap">
          <div className="w-fit cursor-pointer rounded-lg border-2 border-primary bg-backgroundLight p-1 transition-all hover:-translate-y-1">
            <img
              src={post.author.profilePhoto}
              alt={post.author.name + ' profile photo'}
              className="w-24 md:w-16"
            />
          </div>
          <div id="author-info" className="ml-3 flex flex-col">
            <p className="cursor-pointer text-lg font-bold text-white">
              {post.author.name}
            </p>
            <span className="cursor-pointer  text-sm text-gray-600">
              {post.author.job} | <strong>{post.author.company}</strong>
            </span>
          </div>
        </div>
        <h4 id="post-content" className="my-4 text-white">
          {Parser(post.content)}
        </h4>
        <hr className="border-gray-600" />
        <form onSubmit={handleAddNewComment} id="post-reply">
          <p className="my-4 text-lg font-bold text-white">
            Deixe seu feedback
          </p>
          <textarea
            onChange={handleChange}
            value={commentInput}
            className="w-full resize-none rounded-lg border-[1px] border-primary bg-background p-4 text-white outline-none ring-2 ring-transparent ring-offset-2 ring-offset-backgroundLight focus:border-transparent focus:ring-secondary"
          ></textarea>
          {commentInput.trim() !== '' && (
            <button
              type="submit"
              title="Publicar novo comentário"
              className="my-4 rounded-lg bg-primary p-3 text-lg font-bold text-white transition-all hover:bg-secondary"
            >
              Publicar
            </button>
          )}
        </form>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </>
  )
}
