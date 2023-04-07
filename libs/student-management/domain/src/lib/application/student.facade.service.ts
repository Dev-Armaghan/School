import { Injectable, OnInit } from '@angular/core';
import { StudentDataService } from '../infrastructure/student.service';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentFacadeService {

  
  private studentSubjectArray = new BehaviorSubject<Student[]>([]);
  studentSubject$ = this.studentSubjectArray.asObservable();

  private studentSubject = new BehaviorSubject<Student | undefined>({} as Student);
  singleStudentSubject$ = this.studentSubject.asObservable();

  constructor(private studentDataService: StudentDataService) { }
 

  loadStudents(){
    this.studentDataService.loadAllStudents().subscribe(
      {
        next: (val) => {
          console.log(val)
          this.studentSubjectArray.next(val)
        },
        error : (err) =>{
          console.log(`the error in loading student is ${err}`);
        }
      }
    )
  }

  addStudent(student: Student){
    this.studentDataService.addNewStudent(student);
  }

  removeStudent(id: number){
    this.studentDataService.removeStudent(id)
  }

  getStudentForUpdate(id: number){
    this.studentDataService.getStudentForUpdate(id).subscribe(
      {
        next: (val: Student | undefined) => {
          this.studentSubject.next(val);
        },
        error: (err) => console.log(err)
      }
    )
  }

  updateStudent(student?: Student){
    this.studentDataService.updateStudent(student);
  }
}
