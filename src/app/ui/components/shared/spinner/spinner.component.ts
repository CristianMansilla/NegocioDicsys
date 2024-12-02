import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class SpinnerComponent {
  @Input() showSpinner: true | false;
  @Input() type: "dots" 
  | "lines" 
  | "lines-small" 
  | "lines-sharp" 
  | "lines-sharp-small" 
  | "bubbles"
  | "circles"
  | "circular"
  | "crescent";
  @Input() textSpinner: string;
  @Input() classSpinner: string;
  @Input() classText: string;
  

  constructor() { 
    this.showSpinner = false;
    this.type = "dots";
    this.textSpinner = "Cargando";
    this.classSpinner = "";
    this.classText = "";
  }
}
