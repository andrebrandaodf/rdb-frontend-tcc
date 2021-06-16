import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateInAnalysisComponent } from './certificate-in-analysis.component';

describe('CertificateInAnalysisComponent', () => {
  let component: CertificateInAnalysisComponent;
  let fixture: ComponentFixture<CertificateInAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateInAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateInAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
