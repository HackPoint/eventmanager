import { TestBed, inject } from '@angular/core/testing';

import { MessageHubService } from './messagehub.service';

describe('MessagehubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageHubService]
    });
  });

  it('should be created', inject([MessageHubService], (service: MessageHubService) => {
    expect(service).toBeTruthy();
  }));
});
