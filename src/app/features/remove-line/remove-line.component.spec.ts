import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLineComponent } from './remove-line.component';
import { NavigatorService } from '../../core/services/navigator.service';
import { SharedModule } from '../../shared/shared.module';

describe('RemoveLineComponent', () => {
  let component: RemoveLineComponent;
  let fixture: ComponentFixture<RemoveLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [RemoveLineComponent],
      providers: [NavigatorService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RemoveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove lines containing', () => {
    component.setInputText('inputText');
    component.setTextToRemove('input');
    component.clickChip();

    expect(component.result).toEqual('');
  });

  it('should remove lines not containing', () => {
    component.setInputText('inputText');
    component.setTextToRemove('input');

    expect(component.result).toEqual('inputText');
  });

  it('should copy() text', () => {
    let service = TestBed.inject(NavigatorService);
    let spy = spyOn(service, 'copy');
    component.copy();
    expect(spy).toHaveBeenCalled();
  });

});
