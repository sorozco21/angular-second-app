import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFileUploadComponent } from './dynamic-file-upload.component';

describe('DynamicFileUploadComponent', () => {
  let component: DynamicFileUploadComponent;
  let fixture: ComponentFixture<DynamicFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
