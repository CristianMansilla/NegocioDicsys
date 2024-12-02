import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Category{
  id:string;
  nombre:string;
}

type ApiResponse = Category[];

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  httpClient = inject(HttpClient);

  getAllCategories():Promise<ApiResponse>{
    return firstValueFrom(
      this.httpClient.get<ApiResponse>("http://localhost:5000/api/categorias")
    )
  };
  
}
