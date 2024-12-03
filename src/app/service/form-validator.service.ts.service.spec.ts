import { TestBed } from '@angular/core/testing';

import { FormValidatorServiceTsService } from './form-validator.service.ts.service';

describe('FormValidatorServiceTsService', () => {
  let service: FormValidatorServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidatorServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
