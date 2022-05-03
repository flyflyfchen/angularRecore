import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonthreeComponent } from './sonthree.component';

describe('SonthreeComponent', () => {
  let component: SonthreeComponent;
  let fixture: ComponentFixture<SonthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
