import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { WeatherServiceService } from './weather-service.service';

describe('WeatherServiceService', () => {

  let service: WeatherServiceService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      providers: [WeatherServiceService]
    }).compileComponents();
    service = TestBed.inject(WeatherServiceService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getWeatherData() should call http get method form the weather api', () =>{

    //Arragne
    var response = {temperature: '10'}

    service.getWeatherData().subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne('https://api.openweathermap.org/data/2.5/weather?appid=9f0d11af37ad6bca25fa399e0bd79421&q=Toronto');
    expect(req.request.method).toEqual('GET');
    req.flush(response);

    httpMock.verify();
  });

});
