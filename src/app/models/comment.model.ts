import { Author } from './author.model'
import { ReplyTo } from './reply-to.model'

//@Author Ismael Alves
export class Comment {
    kind:string
    status:string
    id:string
    inReplyTo:ReplyTo
    post:ReplyTo
    blog:ReplyTo
    published:Date
    updated:Date
    selfLink:string
    content:string
    author:Author
}