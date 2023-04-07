import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFacadeService } from './application/student.facade.service';

@NgModule({
  imports: [CommonModule],
  providers:[StudentFacadeService]
})
export class StudentManagementDomainModule {}
