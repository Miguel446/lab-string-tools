import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigatorService } from '../../../core/services/navigator.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {

  constructor(private navigatorService: NavigatorService) { }

  @Input()
  options: string[] = [];

  @Input()
  text: string = "";

  @Input()
  label: string = "";

  @Input()
  isReadOnly: boolean = false;

  @Output()
  textAreaListener: EventEmitter<string> = new EventEmitter<string>();

  clear() {
    this.text = "";
  }

  copy() {
    this.navigatorService.copy(this.text);
  }

  onChange() {
    this.textAreaListener.emit(this.text);
  }

}
