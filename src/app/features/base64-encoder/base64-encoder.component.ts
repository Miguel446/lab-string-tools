import { Component } from '@angular/core';
import { NavigatorService } from '../../core/navigator.service';

@Component({
  selector: 'app-base64-encoder',
  templateUrl: './base64-encoder.component.html',
  styleUrl: './base64-encoder.component.css'
})
export class Base64EncoderComponent {

  constructor(private navigatorService: NavigatorService) { }

  result: string = '';

  setInputText($event: string) {
    // convert to base64
  }

  copy() {
    this.navigatorService.copy(this.result);
  }

}
