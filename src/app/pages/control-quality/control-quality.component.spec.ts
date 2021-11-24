import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlQualityComponent } from './control-quality.component';

describe('ControlQualityComponent', () => {
  let component: ControlQualityComponent;
  let fixture: ComponentFixture<ControlQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
