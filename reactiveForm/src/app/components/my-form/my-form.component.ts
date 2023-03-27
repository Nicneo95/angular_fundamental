import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RSVP } from 'src/app/models';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  // 3. create a variable for formGroup
  myForm!: FormGroup;
  regForm!: FormGroup;
  // 2. create constructor that takes in fb. Create forms with less boilerplate code
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // we can write it this way or create a form function
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  
    this.regForm = this.createForm();

    // this is subscribe to any value change in the form
    this.myForm.valueChanges.subscribe((val) => {
      console.log(val);
    });
    // check if the form is valid or not valid
    this.myForm.statusChanges.subscribe((val) => {
      console.log(val);
    });
  }

  // this is like the schema for the regForm
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      age: this.fb.control<number>(18, [
        Validators.required,
        Validators.min(18),
      ]),
      attendance: this.fb.control<string>('', [Validators.required]),
    });
  }

  // on click this function will process the form 
  processForm() {
    //const rsvp = this.regForm.value as RSVP
    const rsvp: RSVP = {
      // name must be same as formControlName 
      // ? means name can be undefined or null 
      name: this.regForm.get('name')?.value,
      email: this.regForm.get('email')?.value,
      age: this.regForm.get('age')?.value,
      attendance: this.regForm.get('attendance')?.value == 'yes',
    }
    console.info('>>> processing form: ', rsvp)
    // reset the values of all the controls in a form to their initial values
    this.regForm.reset()
  }

  // pass in the control name as argument and check if the formControlName is invalid and not pristine 
  isControlInvalid(ctrlName: string): boolean {
    const ctrl = this.regForm.get(ctrlName) as FormControl
    return ctrl.invalid && (!ctrl.pristine)
  }
}
