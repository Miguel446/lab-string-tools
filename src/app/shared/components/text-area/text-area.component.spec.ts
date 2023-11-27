import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaComponent } from './text-area.component';
import { FormsModule } from '@angular/forms';
import { NavigatorService } from '../../../core/services/navigator.service';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TextAreaComponent],
      providers: [NavigatorService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should clear() text', () => {
    component.text = 'some text';
    component.clear();
    expect(component.text).toEqual("");
  });

  it('should copy() text', () => {
    let service = TestBed.inject(NavigatorService);
    let spy = spyOn(service, 'copy');
    component.copy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call onChange()', () => {
    let spy = spyOn(component, 'onChange');
    component.onChange();
    expect(spy).toHaveBeenCalled();
  });
});
