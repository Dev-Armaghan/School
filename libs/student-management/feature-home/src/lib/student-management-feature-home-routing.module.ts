import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes =[
    {
        path:'students',
        loadChildren:() => import('@school/student-management/feature-student').then((m)=> m.StudentManagementFeatureStudentModule)
    },
    {
        path:'',
        redirectTo:'students',
        pathMatch:"full"
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

export class StudentManagementFeatureHomeRoutingModule {
}
