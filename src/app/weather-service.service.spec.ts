import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherServiceService } from './weather-service.service';

describe('WeatherServiceService', () => {
  let service: WeatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      providers: [WeatherServiceService]
    }).compileComponents();
    service = TestBed.inject(WeatherServiceService);
  });

});
