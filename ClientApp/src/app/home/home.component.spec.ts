
import { TestBed, inject } from "@angular/core/testing";
import { HttpEvent, HttpEventType } from "@angular/common/http";
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';

import { HomeComponent } from "./home.component";

describe('HomeComponent', () => {
    let homeComp: HomeComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HomeComponent]
        });
        homeComp = TestBed.inject(HomeComponent);
    });
    it (
        'Call Azure HTTP',
        inject(
            [HttpTestingController, HomeComponent],
            (httpMock: HttpTestingController, testHome: HomeComponent) => {
                testHome.callAzureFunc();
            }
        )
    );
})