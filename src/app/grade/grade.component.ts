import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Grade } from './grade';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

import {GradeService} from '../services/grade.service';

@Component({
  selector: 'kra-grade',
  templateUrl: './grade.component.html',
 
})
export class GradeComponent implements OnInit {
  
  isNew:boolean=true;
  frmGrade: FormGroup;
  subscription:any;
  oldGrade:Grade;

  constructor(
    private formBuilder:FormBuilder ,
    private gradeService:GradeService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }


 ngOnInit() {
    if(typeof this.activatedRoute.snapshot.params['id'] ==='undefined'){
      this.frmGrade = this.formBuilder.group({
        name: ['', Validators.required],
        description: ''
      });
    }else{
      this.isNew=false;
      this.oldGrade=this.gradeService.getOneGrade(this.activatedRoute.snapshot.params['id']);
        this.frmGrade = this.formBuilder.group({
          name: [this.oldGrade.name, Validators.required],
          description: this.oldGrade.description
      });
    }
  }

  onAdd(){
    if(this.frmGrade.dirty && this.frmGrade.valid){     
      this.gradeService.addGrade(this.frmGrade.value);
      this.frmGrade.reset();
      this.router.navigate(['/grade-listing']);
    }
  }

  onUpdate(){
    if(this.frmGrade.dirty && this.frmGrade.valid){     
        this.gradeService.editGrade(this.oldGrade,this.frmGrade.value);
        this.frmGrade.reset();
        this.router.navigate(['/grade-listing']);
    }    
  }
}

