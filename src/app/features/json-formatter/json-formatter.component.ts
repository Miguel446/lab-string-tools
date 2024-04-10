import { Component } from '@angular/core';
import { jsonrepair } from 'jsonrepair'

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.css'
})
export class JsonFormatterComponent {

  result: string = '';

  setInputText(text: string) {
    try {
      if ((text.startsWith("'") && text.endsWith("'")) || (text.startsWith("\"") && text.endsWith("\""))) {
        text = text.substring(1, text.length - 1);
      }
      this.result = JSON.stringify(JSON.parse(jsonrepair(text)), null, 2);
    } catch (err) {
      this.result = !text ? '' : 'Error';
    }
  }

}
