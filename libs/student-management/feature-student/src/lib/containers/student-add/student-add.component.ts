import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student, StudentFacadeService } from '@school/student-management/domain';

@Component({
  selector: 'school-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent {

  myForm:FormGroup;
  student: Student={} as Student;

  constructor(private formBuilder:FormBuilder,private studentFacadeService: StudentFacadeService,private router:Router){
    this.myForm = formBuilder.group(
      {
        firstName :'',
        lastName:'',
        marks:'',
        class:''
      }
    )
  }
  addStudent(){
    // this.student.firstName=this.myForm.value.firstName;
    // this.student.lastName=this.myForm.value.lastName;
    // this.student.marks=this.myForm.value.marks;
    // this.student.class=this.myForm.value.class;

    this.student = this.myForm.value
    this.studentFacadeService.addStudent(this.student);
    this.router.navigate(['/student-management']);
  }

}
