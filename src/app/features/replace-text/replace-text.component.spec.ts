import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceTextComponent } from './replace-text.component';
import { SharedModule } from '../../shared/shared.module';
import { NavigatorService } from '../../core/services/navigator.service';

describe('ReplaceTextComponent', () => {
  let component: ReplaceTextComponent;
  let fixture: ComponentFixture<ReplaceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ReplaceTextComponent],
      providers: [NavigatorService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReplaceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should replace text', () => {
    component.setInputText('inputText');
    component.setSearchText('input');
    component.setReplaceText('test');
    expect(component.result).toEqual('testText');
  });

  it('should copy() text', () => {
    let service = TestBed.inject(NavigatorService);
    let spy = spyOn(service, 'copy');
    component.copy();
    expect(spy).toHaveBeenCalled();
  });
});
