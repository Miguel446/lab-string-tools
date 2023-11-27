import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64DecoderComponent } from './base64-decoder.component';
import { SharedModule } from '../../shared/shared.module';
import { NavigatorService } from '../../core/services/navigator.service';

describe('Base64DecoderComponent', () => {
  let component: Base64DecoderComponent;
  let fixture: ComponentFixture<Base64DecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [Base64DecoderComponent],
      providers: [NavigatorService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Base64DecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decode from base64', () => {
    component.setInputText('aW5wdXRUZXh0');

    expect(component.result).toEqual('inputText');
  });

  it('should copy() text', () => {
    let service = TestBed.inject(NavigatorService);
    let spy = spyOn(service, 'copy');
    component.copy();
    expect(spy).toHaveBeenCalled();
  });

});
