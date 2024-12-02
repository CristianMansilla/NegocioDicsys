import { Component, inject, OnInit } from '@angular/core';
import { UrlNavigateService } from 'src/app/services/navigate/url-navigate.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone: true,
  imports: [SpinnerComponent]
})
export class SplashComponent  implements OnInit {

  urlNavigateService = inject(UrlNavigateService);

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.urlNavigateService.navegateUrl("/main");
    }, 3000);
  }
}
