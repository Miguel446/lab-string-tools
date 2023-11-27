import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChipsComponent } from './routing-chips.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { ReplaceTextComponent } from '../../../features/replace-text/replace-text.component';
import { Base64EncoderComponent } from '../../../features/base64-encoder/base64-encoder.component';
import { Base64DecoderComponent } from '../../../features/base64-decoder/base64-decoder.component';
import { RemoveLineComponent } from '../../../features/remove-line/remove-line.component';

describe('RoutingChipsComponent', () => {

  const routes: Routes = [
    { path: 'replace-text', component: ReplaceTextComponent },
    {
      path: '',
      redirectTo: 'replace-text',
      pathMatch: 'full'
    },
    { path: 'base64-encoder', component: Base64EncoderComponent },
    { path: 'base64-decoder', component: Base64DecoderComponent },
    { path: 'remove-line', component: RemoveLineComponent }
  ];

  let component: RoutingChipsComponent;
  let fixture: ComponentFixture<RoutingChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes(routes)],
      declarations: [RoutingChipsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RoutingChipsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate()`, () => {
    component.routingChips = [{ "label": "Substituir texto", "route": "replace-text", "toggle": true }, { "label": "Remover linhas", "route": "remove-line", "toggle": false }, { "label": "Base64 Encoder", "route": "base64-encoder", "toggle": false },
    { "label": "Base64 Decoder", "route": "base64-decoder", "toggle": false }];

    component.navigate('remove-line', 1);
    expect(component.currentIndex).toEqual(1);
  });

  it(`should not navigate() when nextRoute is toggled`, () => {
    component.routingChips = [{ "label": "Substituir texto", "route": "replace-text", "toggle": true }, { "label": "Remover linhas", "route": "remove-line", "toggle": false }, { "label": "Base64 Encoder", "route": "base64-encoder", "toggle": false },
    { "label": "Base64 Decoder", "route": "base64-decoder", "toggle": false }];

    component.navigate('replace-text', 0);
    expect(component.currentIndex).toEqual(0);
  });

});
