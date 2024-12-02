import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GlobalUrl } from 'src/app/data/url';

export interface Category{
  id:string;
  nombre:string;
}

type ApiResponse = Category[];

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  globalUrl = inject(GlobalUrl);
  httpClient = inject(HttpClient);

  getAllCategories():Promise<ApiResponse>{
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(this.globalUrl.endpoint+this.globalUrl.categories) //http://localhost:5000/api/categorias
    )
  };
  
}
