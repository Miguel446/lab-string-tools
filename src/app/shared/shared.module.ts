import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { InputComponent } from './components/input/input.component';
import { ChipComponent } from './components/chip/chip.component';
import { RoutingChipsComponent } from '../core/components/routing-chips/routing-chips.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrimaryButtonComponent,
    TextAreaComponent,
    InputComponent,
    ChipComponent
  ],
  exports: [
    PrimaryButtonComponent,
    TextAreaComponent,
    InputComponent,
    ChipComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
