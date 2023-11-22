import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { InputComponent } from './components/input/input.component';
import { ChipComponent } from './components/chip/chip.component';
import { RoutingChipsComponent } from './components/routing-chips/routing-chips.component';



@NgModule({
  declarations: [
    PrimaryButtonComponent,
    TextAreaComponent,
    InputComponent,
    ChipComponent,
    RoutingChipsComponent
  ],
  exports: [
    PrimaryButtonComponent,
    TextAreaComponent,
    InputComponent,
    ChipComponent,
    RoutingChipsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
