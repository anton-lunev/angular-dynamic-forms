import { Component } from '@angular/core';
import {InputService} from './input-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  inputs: any[];

  constructor(service: InputService) {
    this.inputs = service.getInputs();
  }
}
