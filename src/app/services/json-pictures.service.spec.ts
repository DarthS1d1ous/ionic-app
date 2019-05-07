import { TestBed } from '@angular/core/testing';

import { JsonPicturesService } from './json-pictures.service';

describe('JsonPicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonPicturesService = TestBed.get(JsonPicturesService);
    expect(service).toBeTruthy();
  });
});
