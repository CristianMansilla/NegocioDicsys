import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ButtonComponent  {
  @Input() text: string;
  @Input() disabled: true | false;
  @Input() id: string;
  @Input() class: string;
  @Input() showIcon: boolean;
  @Input() iconClass: string;
  @Input() iconUrl: string;
  @Input() type: "button" | "submit" | "reset";
  @Input() contentAlign: "left" | "center" | "right";
  @Input() ngClass: string;
  @Input() fill: "clear" | "outline" | "solid";
  @Input() hide: true | false;


  constructor() {
    this.text = "";
    this.disabled = false;
    this.id = "";
    this.class = "";
    this.showIcon = false;
    this.iconClass = "";
    this.iconUrl = "";
    this.type = "button";
    this.contentAlign = "left";
    this.ngClass = "";
    this.fill = "solid";
    this.hide = false;
  }
}
