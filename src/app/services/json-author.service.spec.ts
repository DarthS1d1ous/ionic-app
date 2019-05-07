import { TestBed } from '@angular/core/testing';

import { JsonAuthorService } from './json-author.service';

describe('JsonAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonAuthorService = TestBed.get(JsonAuthorService);
    expect(service).toBeTruthy();
  });
});
