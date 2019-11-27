import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';
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

  constructor(
    private blogS:BlogService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.blogS.getBlog().subscribe((blog)=>{
      this.blog = blog
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
