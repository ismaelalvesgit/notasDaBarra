import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {
    var slider = new Flickity('.carousel', {
      autoPlay: 2500,
      pageDots: false,
      wrapAround: true
    }); 
  }

}
