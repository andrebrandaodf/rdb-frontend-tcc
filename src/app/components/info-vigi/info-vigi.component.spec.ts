import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVigiComponent } from './info-vigi.component';

describe('InfoVigiComponent', () => {
  let component: InfoVigiComponent;
  let fixture: ComponentFixture<InfoVigiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVigiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVigiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
