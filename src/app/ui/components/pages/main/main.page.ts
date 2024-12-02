import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriesService, Category } from '../../../../services/categories/categories.service';
import {IonicModule} from '@ionic/angular';
import { UrlNavigateService } from '../../../../services/navigate/url-navigate.service';
import { GlobalText } from '../../../../data/text';
import { ButtonComponent } from '../../shared/button/button.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ButtonComponent, HeaderComponent]
})
export class MainPage implements OnInit {

  categories:Category[]=[];

  categoriesService = inject(CategoriesService);
  urlNavigateService = inject(UrlNavigateService);
  globalText = inject(GlobalText);

  async ngOnInit() {
    const response = await this.categoriesService.getAllCategories();
    this.categories = response;
  }

  navegateProducts(categoria:any) {
    this.urlNavigateService.navegateUrlWithParams("/products", {
      state: {
        idCategoria: categoria.id,
        nombreCategoria: categoria.nombre,
      },
    });
  }

}
