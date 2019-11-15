import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name:string

  constructor() { }

  ngOnInit() {
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 80) {
       let element = document.getElementsByTagName('body')[0];
       element.classList.add('sticky');
     } else {
      let element = document.getElementsByTagName('body')[0];
        element.classList.remove('sticky'); 
     }
  } 
}