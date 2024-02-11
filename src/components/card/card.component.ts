import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink, RouterLinkActive} from '@angular/router';
import { DetailsPageComponent } from '../../pages/details-page/details-page.component';




@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive,DetailsPageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{
  @Input()  cardData: any;
  showImage(){
    if(this.cardData == null && this.cardData.default_image == null && this.cardData.default_image.thumbnail == null){
        return false;
    }
    else{
      return true;
    }
  }
}
