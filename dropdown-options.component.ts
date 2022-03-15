import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownOption } from './dropdown-option';

@Component({
  selector: 'lib-options-dropdown',
  templateUrl: './options-dropdown.component.html',
  styleUrls: ['./options-dropdown.component.scss'],
})
export class OptionsDropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Output() optionClick = new EventEmitter<DropdownOption>();

  constructor() {}

  handleOptionClick(event: any, option: DropdownOption) {
    event.stopPropagation();
    this.optionClick.emit(option);
  }
}