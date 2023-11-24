import { Component } from '@angular/core';
import { NavigatorService } from '../../core/navigator.service';

@Component({
  selector: 'app-base64-decoder',
  templateUrl: './base64-decoder.component.html',
  styleUrl: './base64-decoder.component.css'
})
export class Base64DecoderComponent {

  constructor(private navigatorService: NavigatorService) { }

  result: string = '';

  setInputText(text: string) {
    this.result = window.atob(text);
  }

  copy() {
    this.navigatorService.copy(this.result);
  }

}
