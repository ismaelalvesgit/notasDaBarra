import { Locale } from './locale.model'

//@Author Ismael Alves
export class User {
    kind:string
    id:string
    created:Date
    url:string
    selfLink:string
    blogs:Blogs
    displayName:string
    about:string
    locale:Locale
}
class Blogs{
    selfLink:string
}