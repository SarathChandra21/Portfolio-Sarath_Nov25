import { faBriefcase,faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  fa_briefcase = faBriefcase;
  fa_check = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
