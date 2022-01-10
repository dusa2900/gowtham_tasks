import { TestBed } from '@angular/core/testing';

import { MatchInterceptor } from './match.interceptor';

describe('MatchInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MatchInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MatchInterceptor = TestBed.inject(MatchInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
