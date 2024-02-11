import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService{
  plantData = new Subject<any[]>();
  plantData$ = this.plantData.asObservable();

  setData(plantData: any){
    this.plantData.next(plantData);
  }
}
