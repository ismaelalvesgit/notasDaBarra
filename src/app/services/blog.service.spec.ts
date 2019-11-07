import { TestBed, getTestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Blog } from '../models/blog.model';

describe('test - BlogService', () => {
  let injector: TestBed;
  let service: BlogService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        BlogService,
      ],
    });
    injector = getTestBed();
    service = injector.get(BlogService);
    httpMock = injector.get(HttpTestingController);
  });


  it('instaciamento do metodo', () => {
    expect(service).toBeTruthy();
  });

  it('get / blog', ()=>{
    service.getBlog().subscribe((rs)=>{
      expect(rs).toBe(4);
      expect(rs).toContain(Blog);
    });
  });
  
});
