import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform-form2',
  templateUrl: './studentform-form2.component.html',
  styleUrls: ['./studentform-form2.component.scss']
})
export class StudentformForm2Component implements OnInit {

  @Input() form2!: FormGroup;
  @Output() formValuChange = new EventEmitter<any>();
  formattedDate: string | null = null;
  selectedItem: any;

  subjects = [
    { subjectsId: 1, name: "Science" },
    { subjectsId: 2, name: "Maths" },
    { subjectsId: 3, name: "IT" },
  ];

  sports = [
    { sportsId: 1, name: "Cricket" },
    { sportsId: 2, name: "Rugby" },
    { sportsId: 3, name: "Football" },
  ];
  constructor(
    private formBuilder: UntypedFormBuilder,
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initFormGroup()
  }
   initFormGroup() {
      this.form2 = this.formBuilder.group({
        subjectsId: ["", Validators.required],
        fHobby: ["", Validators.required],
        sportsId: ["",Validators.required],
        fBook: [""],
        fOccupation: ["", Validators.required],
        mOccupation: [""],
       
      });
  
     
    }


    
      get f() {
        return this.form2.controls;
      }
}
