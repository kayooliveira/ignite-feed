export interface Post {
  id: number
  author: AuthorType
  content: string
  comments: CommentType[]
}
export type AuthorType = {
  id: number
  profilePhoto: string
  name: string
  job: string
}

export type CommentType = {
  author: AuthorType
  content: string
  createdAt: string
  likes: number
}
