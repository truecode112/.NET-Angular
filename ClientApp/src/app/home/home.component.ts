import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public callResponse = "Not call yet";

  constructor(private http: HttpClient) {
  }

  public callAzureFunc() {
    this.getAzureResponse();
  }

  public getAzureResponse() {
    const headers = new HttpHeaders().set('Content-Type', 'text');
    return this.http.get('http://localhost:7074/api/Function1', { responseType: 'text'}).subscribe(body => {
      console.log(body);
      this.callResponse = body;
    });
  }

}
