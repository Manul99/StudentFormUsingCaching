import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform-form1',
  templateUrl: './studentform-form1.component.html',
  styleUrls: ['./studentform-form1.component.scss']
})
export class StudentformForm1Component implements OnInit{

  @Input() form1!: FormGroup;
  @Output()  formValueChange = new EventEmitter<any>();
  formattedDate: string | null = null;

  constructor(
    private formBuilder: UntypedFormBuilder,
  ){

  }
  ngOnInit(): void {
  
    this.initFormGroup()
  }

  initFormGroup() {
    this.form1 = this.formBuilder.group({
      Fname: ["", Validators.required],
      lName: ["", Validators.required],
      fatherName: [""],
      MotherName: [""],
      dob: [0, Validators.required],
      address: [""],
      mNumber: [""],
      email: ["", Validators.required],
      faNumber: ["", Validators.required],
      moNumber: ["", Validators.required],
      postID: [""],
      age: [""],
    });

   
  }

  onDateChangeCommencing(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedDate = inputElement.value; // Get the selected date as a string (yyyy-MM-dd)
    if (selectedDate) {
      const formatted = formatDate(new Date(selectedDate), 'yyyy-MM-dd', 'en'); // Format the selected date
      this.formattedDate = formatted;
      this.form1.get("commencedDate")?.setValue(formatted);
    }
  }

  get f() {
    return this.form1.controls;
  }
}
