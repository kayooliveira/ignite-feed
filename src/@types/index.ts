export interface PostType {
  id: number
  author: UserType
  content: string
  comments: CommentType[]
  createdAt: Date
}
export type UserType = {
  id: number
  profilePhoto: string
  name: string
  job: string
  company?: string
}

export type UserInputTypes = {
  name: string
  job: string
  company: string
  profilePhoto: string
}

export type CommentType = {
  id: number
  author: UserType
  content: string
  createdAt: Date
  likes: number
}
