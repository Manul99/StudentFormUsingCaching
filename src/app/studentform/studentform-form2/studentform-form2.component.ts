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
  
  constructor(
    private formBuilder: UntypedFormBuilder,
  ){

  }
  ngOnInit(): void {
   
    this.form2 = this.formBuilder.group({
      fSubject: ["",Validators.required],
      fHobby: ["", Validators.required],
      fSport: ["", Validators.required],
      fBook: ["", Validators.required],   
      fOccupation: ["", Validators.required],
      mOccupation: ["", Validators.required],
    });
    this.getValuChanges();
    
  }




//This function initializes a form group with the formBuilder

    getValuChanges(){
      this.form2.valueChanges.subscribe((value) => {
        this.formValuChange.emit(value);
      })
    }

    
      get f() {
        return this.form2?.controls;
      }
}
