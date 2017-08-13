import { InputBase } from './input-base';
import {FormInputTypes} from './form-input-types';

export class DropdownInput extends InputBase<string> {
  controlType = FormInputTypes.DROPDOWN;

  constructor(options = {}) {
    super(options);
  }
}
