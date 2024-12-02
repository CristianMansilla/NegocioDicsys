import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HeaderComponent   {
  @Input() title:string;
  @Input() showIcon: boolean;
  @Input() iconClass: string;
  @Input() iconUrl: string;

  constructor() { 
    this.title = "";
    this.showIcon = false;
    this.iconClass = "";
    this.iconUrl = "";
  }
}
