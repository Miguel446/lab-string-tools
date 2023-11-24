import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  input: string = '';

  @Output()
  inputListener: EventEmitter<string> = new EventEmitter<string>();

  onChange() {
    this.inputListener.emit(this.input);
  }

}
