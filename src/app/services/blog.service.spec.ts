import { TestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Blog } from '../models/blog.model';

describe('test - BlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ],
    providers: [
      BlogService,
    ],
  }));

  it('instaciamento do metodo', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });

  it('get / blog', ()=>{
    const service: BlogService = TestBed.get(BlogService);
    service.getBlog().subscribe((rs)=>{
      expect(rs).toBe(4)
      expect(rs).toContain(Blog)
    })
  })
});
