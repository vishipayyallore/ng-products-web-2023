import { TestBed } from '@angular/core/testing';

import { MessageBandService } from './message-band.service';

describe('MessageBandService', () => {
  let service: MessageBandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
