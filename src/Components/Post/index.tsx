import { format, formatDistanceToNow, formatISO } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import Parser from 'html-react-parser'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

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
  const { state } = useAuth()
  const postDateFormatted = format(post.createdAt, "d 'de' LLL 'às' HH:m'h'", {
    locale: ptBR
  })
  const postDateFromNow = formatDistanceToNow(post.createdAt, { locale: ptBR })

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

  return (
    <article className="rounded-lg bg-backgroundLight p-8">
      <header id="post-header" className="flex flex-wrap justify-between">
        <div className="flex">
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

        <div id="post-time" className="flex flex-col items-end">
          <time
            className="text-gray-600"
            title={postDateFormatted}
            dateTime={formatISO(post.createdAt)}
          >
            publicado há {postDateFromNow}
          </time>
          <div id="post-actions">
            <button
              title={
                isLikedPost ? 'Desmarcar como gostei' : 'Marcar como gostei'
              }
              className="color-gray-600 py-2 font-bold text-gray-600"
              onClick={likePost}
            >
              <div className="gap-2">
                {isLikedPost ? (
                  <p className="text-primary">
                    <AiFillLike className="inline-block h-6 w-6 align-bottom" />{' '}
                    • {post.likes}
                  </p>
                ) : (
                  <p>
                    <AiOutlineLike className="inline-block h-6 w-6 align-bottom" />{' '}
                    • {post.likes}
                  </p>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
      <h4 id="post-content" className="my-4 text-white">
        {Parser(post.content)}
      </h4>
      <hr className="border-gray-600" />
      <form onSubmit={handleAddNewComment} id="post-reply">
        <p className="my-4 text-lg font-bold text-white">Deixe seu feedback</p>
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
    </article>
  )
}
