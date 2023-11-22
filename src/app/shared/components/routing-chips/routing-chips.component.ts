import { Component, Input } from '@angular/core';
import { RoutingChip } from './routing-chip.model';

@Component({
  selector: 'app-routing-chips',
  templateUrl: './routing-chips.component.html',
  styleUrl: './routing-chips.component.css'
})
export class RoutingChipsComponent {

  @Input()
  routingChips!: RoutingChip[];

  lastIndex: number = 0;

  navigate(route: string, routeIndex: number) {
    if (this.routingChips[routeIndex].toggle) {
      return;
    }

    this.routingChips[this.lastIndex].toggle = false;
    this.routingChips[routeIndex].toggle = true;
    this.lastIndex = routeIndex;

    console.log(route + ' ' + routeIndex);
  }
}
