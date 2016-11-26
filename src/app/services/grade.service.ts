import {Grade} from '../grade/grade'

export class GradeService {

  private grades:Grade[]=[];

  addGrade(newGrade:Grade){
    this.grades.push(newGrade);
  }

  getGrades(){
    return this.grades;
  }  
  
  editGrade(oldGrade:Grade,newGrade:Grade){
    this.grades.splice(this.grades.indexOf(oldGrade),1,newGrade);
  }

  deleteGrade(grade:Grade){
    this.grades.splice(this.grades.indexOf(grade),1);
  }
}