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
  company?: string
}

export type CommentType = {
  id: number
  author: AuthorType
  content: string
  createdAt: Date
  likes: number
}
