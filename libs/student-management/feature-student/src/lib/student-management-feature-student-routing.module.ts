import { RouterModule, Routes } from "@angular/router";
import { StudentPageComponent } from "./containers/student-page/student-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentAddComponent } from "./containers/student-add/student-add.component";
import { StudentEditComponent } from "./containers/student-edit/student-edit.component";

const routes : Routes = [
    {
        path:'studentAdd',
        component:StudentAddComponent
    },
    {
        path:'studentEdit',
        component:StudentEditComponent
    },
    {
        path:'',
        component: StudentPageComponent
    },
]

@NgModule(
    {
        imports:[
            CommonModule,
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    }
)
export class StudentManagementFeatureStudentRoutingModule {
}
