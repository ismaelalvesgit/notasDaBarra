import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity'
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blog:Blog
  posts:Post[]
  
  constructor(
    private blogS:BlogService
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
    this.blogS.getPosts().subscribe((posts)=>{
      this.posts = posts
      console.log(this.posts)
    })
  }

}
