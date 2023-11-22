import { Component } from '@angular/core';
import { RoutingChip } from './shared/components/routing-chips/routing-chip.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string-tools';

  routingChips: RoutingChip[] = [{ "label": "Substituir texto", "route": "replace-text", "toggle": true }, { "label": "Substituir texto", "route": "rota2", "toggle": false },
  { "label": "Substituir texto", "route": "rota3", "toggle": false }, { "label": "Substituir texto", "route": "rota4", "toggle": false },
  { "label": "Substituir texto", "route": "rota5", "toggle": false }];

}
