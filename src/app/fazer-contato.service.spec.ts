import { TestBed } from '@angular/core/testing';

import { FazerContatoService } from './fazer-contato.service';

describe('FazerContatoService', () => {
  let service: FazerContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FazerContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
