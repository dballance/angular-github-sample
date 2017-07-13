import { TestBed, inject } from '@angular/core/testing';

import { RepositorySearchService } from './repository-search.service';

describe('RepositorySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositorySearchService]
    });
  });

  it('should be created', inject([RepositorySearchService], (service: RepositorySearchService) => {
    expect(service).toBeTruthy();
  }));
});
