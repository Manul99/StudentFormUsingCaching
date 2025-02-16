import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-studentform-mainform',
  templateUrl: './studentform-mainform.component.html',
  styleUrls: ['./studentform-mainform.component.scss']
})
export class StudentformMainformComponent implements OnInit {

  form1!: FormGroup;
  form2!: FormGroup;
 
  constructor(
    private formBuilder: UntypedFormBuilder,
    private storageService: StorageService
  ){

  }
  ngOnInit(): void {
    this.initFormGroup();

    //Create unique keys in the browser's storage to store values
    this.form1.valueChanges.subscribe((changeData) =>{
      console.log('Form1 Data Changed:', changeData);
      this.storageService.setItem("form1", changeData);
    });

    this.form2.valueChanges.subscribe((changeData) =>{
      console.log('Form2 Data Changed:', changeData); 
      this.storageService.setItem("form2", changeData);
    })
    
  }

  initFormGroup(){
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
    
        this.form2 = this.formBuilder.group({
          fSubject: ["",Validators.required],
          fHobby: ["", Validators.required],
          fSport: ["", Validators.required],
          fBook: ["", Validators.required],   
          fOccupation: ["", Validators.required],
          mOccupation: ["", Validators.required],

        });


  }

// Handling tab selection and key implementation
  onPart1FormChange(changedData: any){
    this.storageService.setItem("form1",changedData);
  }

  onPart2FormChange(changedData: any){
    this.storageService.setItem("form2",changedData);
  }


  loadFormsDataDetails(): void{
    const form1Data = this.storageService.getItem("form1");	
    const form2Data = this.storageService.getItem("form2");

    if(form1Data){
      this.form1.patchValue(form1Data);
    }

    if(form2Data){
      this.form2.patchValue(form2Data);
    }
  }
}
