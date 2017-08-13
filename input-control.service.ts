import {Injectable} from '@angular/core';
import {InputBase} from './inputs/input-base';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

const validatorsMap = {
  required: Validators.required,
  email: Validators.email
};

const validatorsWithParams = {
  pattern: Validators.pattern,
  minLength: Validators.minLength,
  maxLength: Validators.maxLength
};

@Injectable()
export class InputControlService {
  toFormGroup(inputs: InputBase<any>[]) {
    const group: any = {};

    inputs.forEach(input => {
      group[input.key] = new FormControl(input.value, this.getFormValidators(input.validation));
    });
    return new FormGroup(group);
  }

  getFormValidators(validation = {}): ValidatorFn[] {
    return Object.keys(validation).map(v => {
      return validatorsMap[v] || validatorsWithParams[v](validation[v]);
    });
  }
}
