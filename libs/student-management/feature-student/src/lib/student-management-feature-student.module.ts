import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentManagementFeatureStudentRoutingModule } from './student-management-feature-student-routing.module';
import { StudentPageComponent } from './containers/student-page/student-page.component';
import { StudentAddComponent } from './containers/student-add/student-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from './containers/student-edit/student-edit.component';

@NgModule({
  imports: [
    CommonModule,
    StudentManagementFeatureStudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StudentPageComponent,
    StudentAddComponent,
    StudentEditComponent,
  ],
})
export class StudentManagementFeatureStudentModule {}
