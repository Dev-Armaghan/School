import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../entities/student';
import { EmptyExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  studentData : Student[]=[
    {
      id:1,firstName:'armaghan',lastName:'rasheed',marks:10,class:3
    },
    {
      id:2,firstName:'hanif',lastName:'sial',marks:90,class:4
    },
    {
      id:3,firstName:'haris',lastName:'awan',marks:80,class:2
    },
    {
      id:4,firstName:'armaghan',lastName:'ghauri',marks:65,class:1
    }
  ] 

  loadAllStudents() : Observable<Student[]> {
    return of(this.studentData);
  }

  addNewStudent(student: Student)
  {
    const lastId = this.studentData.length;
    student.id = lastId+1;
    this.studentData.push(student);
  }

  removeStudent(id: number){
    const index = this.studentData.findIndex(val => val.id == id);
    if (index !== -1) {
      this.studentData.splice(index,1);
    }
  }

  getStudentForUpdate(id: number): Observable<Student>{
   
      const data = this.studentData.find(val => val.id == id)
      if(data)
      return of(data);
      else
      return of();
    
  }

  updateStudent(student?: Student)
  {
    if (student)
    {
      const data = this.studentData.find((val)=> val.id == student.id);
      if(data)
      {
        data.class = student.class
        data.marks = student.marks
        data.firstName = student.firstName
        data.lastName = student.lastName
      }
    }
  }

}
