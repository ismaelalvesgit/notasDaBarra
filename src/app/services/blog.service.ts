import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { Blog } from '../models/blog.model';

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

  //metodo que pega os dados dos comentarios do blog
  getComments(){
    return this.http.get(this.baseUrl+`?key=${this.key}`)
  }

  //metodo que pega as pages do blog
  getPages(){
    return this.http.get(this.baseUrl+`?key=${this.key}`)
  }

  //metodo que pega as postages do blog
  getPots(){
    return this.http.get(this.baseUrl+`?key=${this.key}`)
  }

  //metodo que pega o usuario do blog
  getUsers(){
    return this.http.get(this.baseUrl+`?key=${this.key}`)
  }
}
