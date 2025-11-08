import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  fa_graduation = faGraduationCap;
  fa_college     = faUniversity;
  fa_school      = faSchool;
  constructor() { }

  ngOnInit(): void {
  }

}
