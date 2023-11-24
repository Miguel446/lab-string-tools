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
  removeText: string = '';

  result: string = '';

  setInputText(inputText: string) {
    this.inputText = inputText;
    this.removeLines(this.inputText, this.removeText, this.chipToggle);
  }

  setRemoveText(removeText: string) {
    this.removeText = removeText;
    this.removeLines(this.inputText, this.removeText, this.chipToggle);
  }

  clickChip() {
    this.chipToggle = !this.chipToggle;
    this.chipLabel = this.chipToggle ? '  Contém  ' : 'Não contém';
    this.removeLines(this.inputText, this.removeText, this.chipToggle);
  }

  removeLines(inputText: string, searchText: string, chipToggle: boolean) {
    if (!inputText || !searchText || !chipToggle) {
      this.result = '';
      return;
    }

    // remove text from lines

  }

  copy() {
    this.navigatorService.copy(this.result);
  }

}
