import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

import {GradeService} from '../services/grade.service';

@Component({
  selector: 'kra-grade',
  templateUrl: './grade.component.html',
  providers: [GradeService]
})
export class GradeComponent implements OnInit {
  
  isNew:boolean=true;
  frmGrade: FormGroup;

  constructor(private formBuilder:FormBuilder , private gradeService:GradeService) { }

  ngOnInit() {
    this.frmGrade = this.formBuilder.group({
      name: ['',Validators.required],
      description:''
    });
  }

  onAdd(){
    if (this.frmGrade.dirty && this.frmGrade.valid){     
      this.gradeService.addGrade(this.frmGrade.value);
      this.frmGrade.reset();
    }
  }

}
