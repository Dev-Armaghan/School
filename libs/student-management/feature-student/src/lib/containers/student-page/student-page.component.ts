  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { StudentFacadeService, Student } from '@school/student-management/domain';


  @Component({
    selector: 'school-student-page',
    templateUrl: './student-page.component.html',
    styleUrls: ['./student-page.component.css'],
  })
  export class StudentPageComponent implements OnInit {
    // studentData : Student[] = [];

    constructor(private studentFacadeService: StudentFacadeService,private router:Router){}
    student= this.studentFacadeService.studentSubject$;
    // .subscribe(
    //   {
    //     next: (val)=>{
    //       this.studentData=val;
    //       console.log(this.studentData);
    //     },
    //     error : (err)=>{
    //       console.log(`the error in getting student is ${err}`);
    //     }
    //   }
    // );
    ngOnInit(): void {
      this.studentFacadeService.loadStudents();
    }

    
    deleteStudent(id:number){
      this.studentFacadeService.removeStudent(id);
    }

    editStudent(id:number){
      this.studentFacadeService.getStudentForUpdate(id)
      this.router.navigate(['/student-management/students/studentEdit'])
    }
    
  }
