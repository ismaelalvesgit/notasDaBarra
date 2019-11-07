import { ReplyTo } from './reply-to.model'
import { Image } from './image.model'
import { Author } from './author.model'

//@Author Ismael Alves
export class Post {
    kind:string
    id:string
    blog:ReplyTo
    published:Date
    updated:Date
    url:string
    selfLink:string
    title:string
    titleLink:string
    content:string
    images:Image[]
    customMetaData:string
    author:Author
    replies:Replies
    labels:string[]
    location:Location
    status:string
}
class Replies{
    totalItems:number
    selfLink:string
    items:string[]
}
class Location{
    name:string
    lat:string
    lng:string
    span:string
}