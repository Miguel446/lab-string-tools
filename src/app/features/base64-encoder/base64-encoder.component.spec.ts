import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64EncoderComponent } from './base64-encoder.component';
import { NavigatorService } from '../../core/services/navigator.service';
import { SharedModule } from '../../shared/shared.module';

describe('Base64EncoderComponent', () => {
  let component: Base64EncoderComponent;
  let fixture: ComponentFixture<Base64EncoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [Base64EncoderComponent],
      providers: [NavigatorService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Base64EncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should encode to base64', () => {
    component.setInputText('inputText');

    expect(component.result).toEqual('aW5wdXRUZXh0');
  });

  it('should copy() text', () => {
    let service = TestBed.inject(NavigatorService);
    let spy = spyOn(service, 'copy');
    component.copy();
    expect(spy).toHaveBeenCalled();
  });

});
