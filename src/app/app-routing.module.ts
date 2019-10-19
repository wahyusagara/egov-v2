import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },  { path: 'notifikasi', loadChildren: './pages/notifikasi/notifikasi.module#NotifikasiPageModule' },
  { path: 'menu-lain', loadChildren: './pages/menu-lain/menu-lain.module#MenuLainPageModule' },
  { path: 'izin-cuti', loadChildren: './pages/izin-cuti/izin-cuti.module#IzinCutiPageModule' },
  { path: 'izin-cuti-create', loadChildren: './pages/izin-cuti/izin-cuti-create/izin-cuti-create.module#IzinCutiCreatePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
