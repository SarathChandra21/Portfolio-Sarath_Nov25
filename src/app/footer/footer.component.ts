import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mybutton:any;
  date = new Date().getFullYear();
  constructor(private viewportScroller:ViewportScroller) { }

  @HostListener('window:scroll', ['$event'])
  onClickScroll(elementId: string) {
    this.scrollFunction();
    this.viewportScroller.scrollToAnchor(elementId);
  }


  scrollFunction() {
    this.mybutton = document.getElementById("back-to-top");
  
    if(this.mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            this.mybutton.style.display = "block";
        } else {
            this.mybutton.style.display = "none";
        }
    }
  }
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
