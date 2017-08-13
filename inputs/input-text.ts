import { InputBase } from './input-base';
import {FormInputTypes} from './form-input-types';

export class TextInput extends InputBase<string> {
  controlType = FormInputTypes.TEXTBOX;

  constructor(options: {[key: string]: any} = {}) {
    super(options);
  }
}
