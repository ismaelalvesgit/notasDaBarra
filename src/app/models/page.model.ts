import { Author } from './author.model'

//@Author Ismael Alves
export class Page {
    kind:string
    id:string
    status:string
    published:Date
    updated:Date
    url:string
    selfLink:string
    title:string
    content:string
    author:Author
}