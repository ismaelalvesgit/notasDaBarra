import { Component, OnInit, TemplateRef } from '@angular/core';
import Flickity from 'flickity'
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blog:Blog
  posts:Post[]
  postModal:Post
  allPosts:Post[]
  search:FormGroup = new FormGroup({
    "pesquisa": new FormControl(null, [Validators.required])
  })
  postsSearch:Post[]
  pesquisa:string
  modalRef: BsModalRef

  constructor(
    private blogS:BlogService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    new Flickity('.carousel', {
      autoPlay: 2500,
      pageDots: false,
      wrapAround: true
    }); 
    this.blogS.getBlog().subscribe((blog)=>{
      this.blog = blog
    })
    this.blogS.getPages().subscribe((pages)=>{
      console.log(pages)
    })
    this.blogS.getPosts(3).subscribe((posts)=>{
      this.posts = posts
    })
    this.blogS.getPosts().subscribe((allPosts)=>{
      this.allPosts = allPosts
    })
    this.search.valueChanges.subscribe((value)=>{
      this.pesquisa = value.pesquisa 
      this.blogS.getPostsSearch(value.pesquisa).subscribe((search)=>{
        this.postsSearch = search
      })
     
    })
  }

  modal(template: TemplateRef<any>, post:Post){
    this.postModal = post
    this.modalRef = this.modalService.show(template);
  }
}
