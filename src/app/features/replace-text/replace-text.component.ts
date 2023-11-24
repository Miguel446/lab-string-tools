import { Component } from '@angular/core';

@Component({
  selector: 'app-replace-text',
  templateUrl: './replace-text.component.html',
  styleUrl: './replace-text.component.css'
})
export class ReplaceTextComponent {

  result: string = '';

  handleUserText(text: string) {
    console.log("Event: " + text);
  }

  handleReplaceText(replaceText: string) {
    console.log('Replace: ' + replaceText);
  }

  handleReplaceWithText(replaceWithText: string) {
    console.log('Replace With: ' + replaceWithText);
  }

  replaceText() {
    // TODO
  }

  copy() {
    navigator.clipboard.writeText(this.result).then(
      function () {
        // success 
      })
      .catch(
        function () {
          // error
        });
  }

}
