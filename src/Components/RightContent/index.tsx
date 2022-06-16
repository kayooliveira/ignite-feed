import React from 'react'

import { posts } from '../../utils/mock'
import { NewPost } from '../NewPost'
import { Post } from '../Post'

export function RightContent() {
  return (
    <main className="flex w-full flex-col gap-8">
      <NewPost />
      {posts.map(post => (
        <Post
          key={post.author.id}
          author={post.author}
          comments={post.comments}
          content={post.content}
          id={post.id}
        />
      ))}
    </main>
  )
}
