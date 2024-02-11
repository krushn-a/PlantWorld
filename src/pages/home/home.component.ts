import { Component, OnInit } from '@angular/core';
import { PlantApiService } from '../../api/plant-api.service';
import { LayoutComponent } from '../../components/layout/layout.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

}
