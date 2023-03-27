import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, Subject, Subscription } from 'rxjs';
import { Activities } from 'src/app/models';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit, OnDestroy  {
  // this is the form
  todoForm!: FormGroup
  // form array is embedded inside formGroup
  taskArray!: FormArray

  @Output()
  onNewActivity = new Subject<Activities>()
  // $ indicate that the variable is an Observable stream
  valueChanges$!: Subscription

  abc!: Observable<any>
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.todoForm = this.createTodoForm()
    // observe valuechange in the todoForm and delay emitting the value for 500 milliseconds
    this.abc = this.todoForm.valueChanges.pipe(
      debounceTime(500)
    )

    this.valueChanges$ = this.todoForm.valueChanges.subscribe(
      values => {
        console.info('>>> values: ', values)
      }
    )
  }

  ngOnDestroy(): void {
    this.valueChanges$.unsubscribe()
  }

  private createTodoForm(): FormGroup {
    // the array must have at least 2 input 
    this.taskArray = this.fb.array([], [ Validators.minLength(1) ])
    return this.fb.group({
      taskName: this.fb.control<string>('', [ Validators.required ]),
      name: this.fb.control<string>('', [ Validators.required ]),
      // {taskName: '', name: '', tasks: Array()} - how it will look like 
      tasks: this.taskArray
    })
  }

  addTask() {
    // create a schema for the embedded form array
    const g = this.fb.group({
      description: this.fb.control<string>('', [ Validators.required ]),
      dueDate: this.fb.control<string>('', [ Validators.required ])
    })
    // push it to the form array
    // {description: '', dueDate: ''}
    this.taskArray.push(g)
  }

  isFormInvalid(): boolean {
    return this.todoForm.invalid || this.taskArray.length <= 0
  }

  saveTodo() {
    // save the values to the activities model
    const activities = this.todoForm.value as Activities
    // pass the value to the parent component 
    this.onNewActivity.next(activities)
    // once value is pass we reset the form 
    this.todoForm = this.createTodoForm()
  }

  deleteTask(idx: number) {
    this.taskArray.removeAt(idx)
  }
}
