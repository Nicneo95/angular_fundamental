import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { FormArrayComponent } from './components/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    FormArrayComponent,
  ],
  imports: [
    BrowserModule,
    // 1. import in reacvtiveFormModule 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
