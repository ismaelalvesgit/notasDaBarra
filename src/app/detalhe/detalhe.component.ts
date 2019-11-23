import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  blog:Blog
  post:Post
  
  constructor(
    private blogS:BlogService,
    private activateRouter:ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show()
    this.blogS.getBlog().subscribe((blog)=>{
      this.blog = blog
    })
    this.activateRouter.params.subscribe((id:any)=>{
      this.blogS.getPostId(id.id).subscribe((post)=>{
        this.post = post
        this.spinner.hide()
      })
    })
  }

}
