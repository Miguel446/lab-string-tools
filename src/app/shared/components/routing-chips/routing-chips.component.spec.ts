import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChipsComponent } from './routing-chips.component';

describe('RoutingChipsComponent', () => {
  let component: RoutingChipsComponent;
  let fixture: ComponentFixture<RoutingChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
