import { Component } from '@angular/core';
import { NavigatorService } from '../../core/services/navigator.service';

@Component({
  selector: 'app-remove-line',
  templateUrl: './remove-line.component.html',
  styleUrl: './remove-line.component.css'
})
export class RemoveLineComponent {

  constructor(private navigatorService: NavigatorService) { }

  chipLabel: string = 'Não contém';
  chipToggle: boolean = false;

  inputText: string = '';
  textToRemove: string = '';

  result: string = '';

  setInputText(inputText: string) {
    this.inputText = inputText;
    this.removeLines(this.inputText, this.textToRemove, this.chipToggle);
  }

  setTextToRemove(textToRemove: string) {
    this.textToRemove = textToRemove;
    this.removeLines(this.inputText, this.textToRemove, this.chipToggle);
  }

  clickChip() {
    this.chipToggle = !this.chipToggle;
    this.chipLabel = this.chipToggle ? 'Contém' : 'Não contém';
    this.removeLines(this.inputText, this.textToRemove, this.chipToggle);
  }

  removeLines(inputText: string, textToRemove: string, isContaining: boolean) {
    if (!inputText || !textToRemove) {
      this.result = '';
      return;
    }

    let lines: string[] = inputText.split("\n");
    let newLines: string[] = [];

    // O(n²)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if ((isContaining && line.includes(textToRemove)) || (!isContaining && !line.includes(textToRemove))) {
        newLines.push(line);
      }
    }

    this.result = newLines.join("\n");
  }

  copy() {
    this.navigatorService.copy(this.result);
  }

}
