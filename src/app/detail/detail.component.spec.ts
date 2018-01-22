import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from '../../services/http.service';


describe('beerService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HttpService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getBeers()', () => {

    it('should return an Observable<Array<beer>>',
        inject([HttpService, XHRBackend], (beerService, mockBackend) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'beer 0' },
            { id: 1, name: 'beer 1' },
            { id: 2, name: 'beer 2' },
            { id: 3, name: 'beer 3' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: mockResponse
          })));
        });

        beerService.getBeers().subscribe((beers) => {
          let  res = beers.json().data;
          console.log(beers.json().data)
          expect(res.length).toBe(4);
          expect(res[0].name).toEqual('beer 0');
          expect(res[1].name).toEqual('beer 1');
          expect(res[2].name).toEqual('beer 2');
          expect(res[3].name).toEqual('beer 3');
        });

    }));
  });
});