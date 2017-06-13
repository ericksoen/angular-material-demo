import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesTogglesComponent } from './slides-toggles.component';

describe('SlidesTogglesComponent', () => {
  let component: SlidesTogglesComponent;
  let fixture: ComponentFixture<SlidesTogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesTogglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
