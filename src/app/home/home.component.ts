import { Component, OnInit, TemplateRef } from '@angular/core';
import Flickity from 'flickity'
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';

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
  pesquisa: any = { title:''};
  modalRef: BsModalRef

  constructor(
    private blogS:BlogService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
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
      this.spinner.hide()
    })
  }
}
