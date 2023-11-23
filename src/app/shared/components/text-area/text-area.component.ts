import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {

  @Input()
  options: string[] = [];

  text: string = "";

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

}
