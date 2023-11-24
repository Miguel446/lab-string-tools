import { Component } from '@angular/core';
import { NavigatorService } from '../../core/services/navigator.service';

@Component({
  selector: 'app-replace-text',
  templateUrl: './replace-text.component.html',
  styleUrl: './replace-text.component.css'
})
export class ReplaceTextComponent {

  constructor(private navigatorService: NavigatorService) { }

  inputText: string = '';
  searchText: string = '';
  replaceText: string = '';
  result: string = '';

  setInputText(inputText: string) {
    this.inputText = inputText;
    this.replace(this.inputText, this.searchText, this.replaceText);
  }

  setSearchText(searchText: string) {
    this.searchText = searchText;
    this.replace(this.inputText, this.searchText, this.replaceText);
  }

  setReplaceText(replaceText: string) {
    this.replaceText = replaceText
    this.replace(this.inputText, this.searchText, this.replaceText);
  }

  replace(inputText: string, searchText: string, replaceText: string) {
    if (!inputText || !searchText || !replaceText) {
      this.result = '';
      return;
    }
    this.result = inputText.replaceAll(searchText, replaceText);
  }

  copy() {
    this.navigatorService.copy(this.result);
  }

}
