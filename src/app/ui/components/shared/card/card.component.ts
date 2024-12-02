import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GlobalText } from 'src/app/data/text';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ButtonComponent],
})
export class CardComponent{
  globalText = inject(GlobalText);

  @Input() showCard: true | false;
  @Input() image: string;
  @Input() title: string;
  @Input() titleCardContent1: string;
  @Input() textCardContent1: string;
  @Input() titleCardContent2: string;
  @Input() textCardContent2: string;
  @Input() titleCardContent3: string;
  @Input() textCardContent3: string;

  constructor() {
    this.showCard = true;
    this.image = "https://ionicframework.com/docs/img/demos/card-media.png";
    this.title = "";
    this.titleCardContent1 = "";
    this.textCardContent1 = "";
    this.titleCardContent2 = "";
    this.textCardContent2 = "";
    this.titleCardContent3 = "";
    this.textCardContent3 = "";
  }
}
