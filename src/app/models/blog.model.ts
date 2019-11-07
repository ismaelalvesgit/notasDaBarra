import { Locale } from './locale.model'

//@Author Ismael Alves
export class Blog {
    kind:string
    id:string
    name:string
    description:string
    published:Date
    updated:Date
    url:string
    selfLink:string
    posts:Posts
    pages:Pages
    locale:Locale
}
class Posts{
    totalItems:number
    selfLink:string
}
class Pages{
    totalItems:number
    selfLink:string
}