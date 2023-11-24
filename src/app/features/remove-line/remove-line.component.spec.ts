import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLineComponent } from './remove-line.component';

describe('RemoveLineComponent', () => {
  let component: RemoveLineComponent;
  let fixture: ComponentFixture<RemoveLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
