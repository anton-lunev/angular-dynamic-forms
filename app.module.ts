import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputControlService} from './input-control.service';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormInputComponent} from './dynamic-form-input/dynamic-form-input.component';
import {InputService} from './input-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [InputControlService, InputService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
