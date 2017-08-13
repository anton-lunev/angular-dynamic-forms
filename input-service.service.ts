import {Injectable} from '@angular/core';
import {DropdownInput} from './inputs/input-dropdown';
import {InputBase} from './inputs/input-base';
import {TextInput} from './inputs/input-text';

enum InputTypes {
  NUMBER = 'number',
  TEXT = 'text',
  DATE = 'date',
  EMAIL = 'email',
  SELECT = 'select'
}

@Injectable()
export class InputService {
  private data = [
    {
      type: 'number',
      key: 'CopyNo',
      label: 'Copy No.',
      placeholder: 'Copy No.',
      value: '1',
      validation: {
        required: true
      }
    },
    {
      type: 'text',
      key: 'ItemCode1',
      label: 'Item Code 1',
      placeholder: 'Item Code 1',
      validation: {
        required: true
      },
      value: '105'
    },
    {
      type: 'email',
      key: 'emailAddress',
      label: 'Email',
      placeholder: 'Email',
      validation: {
        email: true,
        minLength: '5',
        maxLength: '10',
      },
      value: 'test@epam.com',
    },
    {
      type: 'date',
      key: 'inventoryDate',
      label: 'Inventory Date',
      placeholder: 'Inventory Date',
      validation: {
        required: true
      },
      value: '2017-04-01'
    },
    {
      type: 'select',
      key: 'itemType',
      label: 'Item Type',
      placeholder: 'Item Type',
      options: [
        {key: '0', value: '0 Book'},
        {key: '1', value: '1 Book'},
        {key: '2', value: '2 Book'},
        {key: '3', value: '3 Book'}
      ],
      validation: {
        required: true
      },
      value: '2'
    }
  ];

  private getInput(data) {
    switch (data.type) {
      case InputTypes.TEXT:
      case InputTypes.NUMBER:
      case InputTypes.EMAIL:
      case InputTypes.DATE:
        return new TextInput(data);
      case InputTypes.SELECT:
        return new DropdownInput(data);
    }
  }

  getInputs() {
    return this.data.map(item => this.getInput(item)).filter(i => i);
  }
}
