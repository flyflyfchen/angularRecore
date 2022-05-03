import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtestComponent } from './etest.component';

describe('EtestComponent', () => {
  let component: EtestComponent;
  let fixture: ComponentFixture<EtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
