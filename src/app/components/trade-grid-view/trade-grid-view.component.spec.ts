import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeGridViewComponent } from './trade-grid-view.component';

describe('TradeGridViewComponent', () => {
  let component: TradeGridViewComponent;
  let fixture: ComponentFixture<TradeGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
