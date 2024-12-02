import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products/products.service';
import { GlobalText } from 'src/app/data/text';
import { CardComponent } from '../../shared/card/card.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, CardComponent, HeaderComponent]
})
export class ProductsPage implements OnInit {
  products: Product[] = [];
  categoryId: string = '';
  categoryName: string = '';

  productsService = inject(ProductsService);
  router = inject(Router);
  globalText = inject(GlobalText);

  async ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const data = navigation.extras.state;
      this.categoryId = data['idCategoria'];
      this.categoryName = data['nombreCategoria'];
      const response = await this.productsService.getProductsByCategory(this.categoryId);
      this.products = response;
    }
  }
}
