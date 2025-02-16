import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentformMainformComponent } from './studentform-mainform/studentform-mainform.component';
import { StudentformForm1Component } from './studentform-form1/studentform-form1.component';
import { StudentformForm2Component } from './studentform-form2/studentform-form2.component';
import { NgbModal, NgbModalModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';  // ✅ Import NgSelectModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  


@NgModule({
  declarations: [
    StudentformMainformComponent,
    StudentformForm1Component,
    StudentformForm2Component
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    NgbNavModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [   
    StudentformMainformComponent
  ]
})
export class StudentformModule { }
