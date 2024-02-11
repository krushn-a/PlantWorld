import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantApiService } from '../../api/plant-api.service';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,CardComponent,CommonModule,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit{
  plantData:any = [];
  plantObject: any = {
    "id": 1,
    "common_name": "",
    "scientific_name": [
        ""
    ],
    "other_name": [
        ""
    ],
    "cycle": "",
    "watering": "",
    "sunlight": [],
    "default_image": {}
  }

  constructor(private plantApi: PlantApiService,private dataService:DataService) {}

  ngOnInit(): void {
    this.getCommonName();
  }

  getCommonName(){
    this.plantApi.getPlants().subscribe((res:any)=>{
      this.plantData = res.data;
    })
  }
  sendData(){
    this.dataService.setData(this.plantData);
  }
}
