import { Component, OnInit } from '@angular/core';
import { RoutingChip } from './shared/components/routing-chips/routing-chip.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  currentIndex: number = 0;

  routingChips: RoutingChip[] = [{ "label": "Substituir texto", "route": "replace-text", "toggle": false }, { "label": "Base64 Encoder", "route": "base64-encoder", "toggle": false },
  { "label": "Base64 Decoder", "route": "base64-decoder", "toggle": false }];

  ngOnInit(): void {
    let currentRoute = location.pathname.replace("/", "");
    currentRoute = currentRoute ? currentRoute : 'replace-text'; // default route

    for (let i = 0; i < this.routingChips.length; i++) {
      if (this.routingChips[i].route == currentRoute) {
        this.currentIndex = i;
        this.routingChips[i].toggle = true;
      }
    }
  }

}
