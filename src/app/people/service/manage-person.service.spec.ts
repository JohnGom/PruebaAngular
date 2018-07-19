import { TestBed, inject } from '@angular/core/testing';

import { ManagePersonService } from './manage-person.service';

describe('ManagePersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagePersonService]
    });
  });

  it('should be created', inject([ManagePersonService], (service: ManagePersonService) => {
    expect(service).toBeTruthy();
  }));
});
