import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GlobalUrl } from 'src/app/data/url';

export interface Product{
  id:string;
  nombre:string;
  fecha_vencimiento:string,
  categoria:number,
  precio:string,
  stock:number,
  imagen:string,
}

type ApiResponse = Product[];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  globalUrl = inject(GlobalUrl);

  private urlProductsByCategory = this.globalUrl.endpoint+this.globalUrl.productsByCategories; //http://localhost:5000/api/productos/categorias/

  httpClient = inject(HttpClient);

  getProductsByCategory(idCategoria: string):Promise<ApiResponse>{
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(this.urlProductsByCategory + idCategoria)
    )
  };
}
