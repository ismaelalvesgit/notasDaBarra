import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { Blog } from '../models/blog.model';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { Page } from '../models/page.model';

//@Author Ismael Alves
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl:string = environment.baseUrl
  key:string = environment.key

  constructor(
    private http:HttpClient
  ) { }

  //metodo que usa a navegação hateoas da API
  nativateToRouter(url:string){
    return this.http.get(url+`?key=${this.key}`)
  }

  //metodo que os dados do blog
  getBlog(){
    return this.http.get<Blog>(this.baseUrl+`?key=${this.key}`)
  }

  //metodo que pega as lista os dados dos comentarios do blog
  getComments(postID:string){
    return this.http.get(this.baseUrl+`/posts/${postID}/comments?key=${this.key}`).pipe(
      map((data:any)=>{
        return data.items as Comment[]
      })
    )
  }

  //metodo que pega os comentarios por ID
  getComment(postID:string, commentId:string){
    return this.http.get<Comment>(this.baseUrl+`/posts/${postID}/comments/${commentId}?key=${this.key}`)
  }


  //metodo que pega as pages do blog
  getPages(){
    return this.http.get(this.baseUrl+`/pages?key=${this.key}`).pipe(
      map((data:any)=>{
        return data.items as Page[]
      })
    )
  }

  //metodo que pega page por ID do blog
  getPage(pageId:string){
    return this.http.get<Page>(this.baseUrl+`/pages/${pageId}?key=${this.key}`)
  }

  //metodo que pega as postages do blog
  getPosts(){
    return this.http.get(this.baseUrl+`/posts?key=${this.key}`).pipe(
      map((data:any)=>{
        return data.items as Post[]
      })
    )
  }
}