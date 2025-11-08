import { ViewportScroller } from '@angular/common';
import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

 collapsed = true;
  constructor(private viewportScroller : ViewportScroller) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-color');
    } else {
      element.classList.remove('bg-color');
    }
  }
  
  toggleCollapsed(){
    this.collapsed = !this.collapsed;
  }

  onClickScroll(elementId: string){
    this.viewportScroller.scrollToAnchor(elementId);
  }
  openUrlInNewWindow(url: string): void {
    window.open(url, '_blank');
  }

}
