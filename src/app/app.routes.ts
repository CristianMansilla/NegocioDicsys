import { Routes } from '@angular/router';
import { SplashComponent } from './ui/components/pages/splash/splash.component';


export const routes: Routes = [
  { path: '', component: SplashComponent },
  {
    path: 'main',
    loadComponent: () => import('./ui/components/pages/main/main.page').then( m => m.MainPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./ui/components/pages/products/products.page').then( m => m.ProductsPage)
  },
];
