import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent implements OnInit{

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('plantId');
    console.log(productId)
  }
}
