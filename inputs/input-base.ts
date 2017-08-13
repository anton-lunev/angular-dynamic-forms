import {FormInputTypes} from './form-input-types';

export class InputBase<T> {
  type: string;
  key: string;
  value: T;
  label: string;
  controlType: FormInputTypes;
  options?: { key: string, value: string }[] = [];
  placeholder?: string;
  validation?: { [key: string]: any };

  constructor(options = {}) {
    Object.assign(this, options);
  }
}
