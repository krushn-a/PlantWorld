import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantApiService {
  key:string = "sk-ta0V65c0e5f248acf4036"
  constructor(private http: HttpClient) {}

  getPlants(){
    return this.http.get(`https://perenual.com/api/species-list?key=${this.key}`)
  }
}

// Fetching data from api