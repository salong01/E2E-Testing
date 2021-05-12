import { TestBed } from '@angular/core/testing';

import { HeroUsersService } from './hero-users.service';

describe('HeroUsersService', () => {
  let service: HeroUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
