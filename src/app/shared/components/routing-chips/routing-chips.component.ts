import { Component, Input } from '@angular/core';
import { RoutingChip } from './routing-chip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-chips',
  templateUrl: './routing-chips.component.html',
  styleUrl: './routing-chips.component.css'
})
export class RoutingChipsComponent {

  constructor(private router: Router) { }

  @Input()
  routingChips!: RoutingChip[];

  @Input()
  currentIndex: number = 0;

  navigate(nextRoute: string, nextRouteIndex: number) {
    if (this.routingChips[nextRouteIndex].toggle) {
      return;
    }

    this.routingChips[this.currentIndex].toggle = false;
    this.routingChips[nextRouteIndex].toggle = true;
    this.currentIndex = nextRouteIndex;

    this.router.navigate([nextRoute]);
  }
}
