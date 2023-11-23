import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {

  @Input()
  options: string[] = [];

  @Input()
  text: string = "";

  @Output()
  textOutput: EventEmitter<string> = new EventEmitter<string>();

  clear() {
    this.text = "";
  }

  copy() {
    navigator.clipboard.writeText(this.text).then(
      function () {
        // success 
      })
      .catch(
        function () {
          // error
        });
  }

  onChange() {
    this.textOutput.emit(this.text);
  }

}
