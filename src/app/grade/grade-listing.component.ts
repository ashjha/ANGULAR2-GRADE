import { Component, OnInit } from '@angular/core';
import {GradeService} from '../services/grade.service';
import {Grade} from './grade'

@Component({
  selector: 'kra-grade-listing',
  templateUrl: './grade-listing.component.html',
  styles: []
})
export class GradeListingComponent implements OnInit {

  grades:Grade[];

  constructor(
    private gradeService:GradeService
  ) { }

  ngOnInit() {
    this.grades=this.gradeService.getGrades();
  }

}
