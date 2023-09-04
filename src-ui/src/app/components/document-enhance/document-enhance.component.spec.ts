import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEnhanceComponent } from './document-enhance.component';

describe('DocumentEnhanceComponent', () => {
  let component: DocumentEnhanceComponent;
  let fixture: ComponentFixture<DocumentEnhanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentEnhanceComponent]
    });
    fixture = TestBed.createComponent(DocumentEnhanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
