import { Component, OnInit } from '@angular/core';
//  declare const Typewriter : any;
const Typewriter = require('../../../node_modules/t-writer.js/dist/t-writer.js');


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true, 
      typeSpeed: 100 ,
      typeColor : " #007bff "
    })
    
    writer
      .strings(
        400,
        "Full Stack Developer",
        "Software Developer"
      )
      .start()

  }

}
