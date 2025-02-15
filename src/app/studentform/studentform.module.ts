import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentformMainformComponent } from './studentform-mainform/studentform-mainform.component';
import { StudentformForm1Component } from './studentform-form1/studentform-form1.component';
import { StudentformForm2Component } from './studentform-form2/studentform-form2.component';



@NgModule({
  declarations: [
    StudentformForm1Component,
    StudentformForm2Component
  ],
  imports: [
    CommonModule
  ]
})
export class StudentformModule { }
