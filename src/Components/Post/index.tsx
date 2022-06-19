import { format, formatDistanceToNow, formatISO } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import Parser from 'html-react-parser'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { AiFillLike, AiFillWechat, AiOutlineLike } from 'react-icons/ai'

import { CommentType, PostType } from '../../@types'
import { useAuth } from '../../Hooks/useAuth'
import { Comment } from '../Comment'

interface PostProps {
  post: PostType
  handleLikePost: (id: number) => void
  handleUnlikePost: (id: number) => void
  handleDeletePost?: (id: number) => void
}

export function Post({ post, handleLikePost, handleUnlikePost }: PostProps) {
  const [comments, setComments] = useState<CommentType[]>(post.comments)
  const [commentInput, setCommentInput] = useState<string>('')
  const [isLikedPost, setIsLikedPost] = useState(false)
  const newCommentRef = useRef<HTMLTextAreaElement>(null)
  const { state } = useAuth()
  const postDateFormatted = format(post.createdAt, "d 'de' LLL 'às' HH:m'h'", {
    locale: ptBR
  })
  const postDateFromNow = formatDistanceToNow(post.createdAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setCommentInput(e.target.value)
  }

  function handleAddNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const commentsIds = comments.map(comment => comment.id)
    const highestId = Math.max(...commentsIds)

    const newComment = {
      id: highestId + 1,
      author: state,
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

  function likePost() {
    if (isLikedPost) {
      handleUnlikePost(post.id)
      return setIsLikedPost(false)
    }

    handleLikePost(post.id)
    setIsLikedPost(true)
  }

  function focusCommentInput() {
    newCommentRef.current?.focus()
  }

  return (
    <article className="flex-1 rounded-lg bg-backgroundLight p-8">
      <header className="flex w-full flex-row items-start justify-between md:flex-row">
        <div id="post-author" className="flex w-fit flex-1 items-start">
          <img
            src={post.author.profilePhoto}
            alt={post.author.name + ' avatar'}
            className="h-10 w-10 md:h-16 md:w-16"
          />
          <div id="post-author-info" className="ml-3 flex flex-col">
            <p className="align-top font-bold leading-4 text-white md:text-xl">
              {post.author.name}
            </p>
            <span className="text-xs leading-5 text-gray-600 md:text-sm">
              {post.author.job} | <strong>{post.author.company}</strong>
            </span>
          </div>
        </div>
        <div id="post-time-info">
          <time
            className="text-xs leading-3 text-gray-600 md:text-base"
            dateTime={formatISO(post.createdAt)}
            title={'publicado em ' + postDateFormatted}
          >
            {postDateFromNow}
          </time>
        </div>
      </header>
      <section id="post-content" className="py-4 text-white">
        {Parser(post.content)}
      </section>
      <hr className="my-4 border-gray-600" />
      <div id="post-comments">
        <p className="my-4 text-xl font-bold text-white">Deixe seu feedback</p>
        <form onSubmit={handleAddNewComment}>
          <textarea
            ref={newCommentRef}
            value={commentInput}
            onChange={handleChange}
            className="w-full resize-none rounded-lg border-[1px] border-primary bg-background p-4 font-bold text-gray-600 outline-none ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:border-transparent focus:ring-secondary"
          ></textarea>
          {commentInput.trim() !== '' && (
            <button className="mt-4 rounded-lg bg-primary py-3 px-6 font-bold text-white">
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
      <hr className="my-4 border-gray-600" />
      <div
        id="post-actions"
        className="flex w-full items-center justify-evenly border-gray-600 text-center"
      >
        <button
          onClick={likePost}
          className={`flex items-center transition-colors hover:text-primary ${
            isLikedPost ? 'text-primary' : 'text-white'
          }`}
        >
          {isLikedPost ? (
            <>
              <AiFillLike className="mr-1 h-6 w-6" />
            </>
          ) : (
            <>
              <AiOutlineLike className="mr-1 h-6 w-6" />
            </>
          )}
          <span className="font-bold">Curtir • {post.likes}</span>
        </button>
        <button
          onClick={focusCommentInput}
          className={`flex items-center text-white transition-colors hover:text-primary `}
        >
          <AiFillWechat className="mr-1 h-6 w-6" />
          <span className="font-bold">Comentar • {comments.length} </span>
        </button>
      </div>
    </article>
  )
}
