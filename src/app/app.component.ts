import { Component } from '@angular/core';
import { BlogService } from './services/blog.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private blogS:BlogService){}

  ngOnInit(){
    this.blogS.getBlog().subscribe((rs)=>{
      console.log(rs)
    })
  }
}