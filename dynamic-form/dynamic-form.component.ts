import {Component, Input, OnInit} from '@angular/core';
import {InputBase} from '../inputs/input-base';
import {InputControlService} from '../input-control.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [InputControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() inputs: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private ics: InputControlService) {
  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.inputs);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
