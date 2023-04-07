import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student, StudentFacadeService } from '@school/student-management/domain';

@Component({
  selector: 'school-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {

  private studentId:number | undefined;
  myForm: FormGroup
  student: Student | undefined = {} as Student
  constructor(private formBuilder: FormBuilder, private studentFacadeService: StudentFacadeService,private router:Router) {
    this.myForm = formBuilder.group(
      {
        firstName: '',
        lastName: '',
        marks: '',
        class: ''
      }
    )
  }
  ngOnInit(): void {
    const studentData$ = this.studentFacadeService.singleStudentSubject$.subscribe(
      {
        next: (val) => {
          this.studentId=val?.id
          this.student = val;
          console.log(this.student);
          this.myForm.patchValue({
            firstName: this.student?.firstName,
            lastName: this.student?.lastName,
            marks: this.student?.marks,
            class: this.student?.class
          })
        },
        error: (err) => console.log(err)
      }

    )
  }
  updateStudent() {

    this.student = this.myForm.value;
    if(this.student && this.studentId)
    {
      this.student.id=this.studentId;
    }
  
    console.log(this.student);
    this.studentFacadeService.updateStudent(this.student);
    this.router.navigate(['student-management'])
  }
}
