import { TestBed, inject } from '@angular/core/testing';

import { BasicAuthHtppInterceptorServiceService } from './basic-auth-htpp-interceptor-service.service';

describe('BasicAuthHtppInterceptorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicAuthHtppInterceptorServiceService]
    });
  });

  it('should ...', inject([BasicAuthHtppInterceptorServiceService], (service: BasicAuthHtppInterceptorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
