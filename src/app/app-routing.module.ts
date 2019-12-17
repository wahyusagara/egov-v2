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
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'notifikasi', loadChildren: './pages/notifikasi/notifikasi.module#NotifikasiPageModule' },
  { path: 'menu-lain', loadChildren: './pages/menu-lain/menu-lain.module#MenuLainPageModule' },
  { path: 'izin-cuti', loadChildren: './pages/izin-cuti/izin-cuti.module#IzinCutiPageModule' },
  { path: 'izin-cuti-create', loadChildren: './pages/izin-cuti/izin-cuti-create/izin-cuti-create.module#IzinCutiCreatePageModule' },
  { path: 'perjalanan-dinas', loadChildren: './pages/perjalanan-dinas/perjalanan-dinas.module#PerjalananDinasPageModule' },
  { path: 'perjalanan-dinas-create', loadChildren: './pages/perjalanan-dinas/perjalanan-dinas-create/perjalanan-dinas-create.module#PerjalananDinasCreatePageModule' },
  { path: 'helpdesk-kepegawaian', loadChildren: './pages/helpdesk-kepegawaian/helpdesk-kepegawaian.module#HelpdeskKepegawaianPageModule' },
  { path: 'form-dummy', loadChildren: './pages/form-dummy/form-dummy.module#FormDummyPageModule' },
  { path: 'daftar-pegawai', loadChildren: './pages/daftar-pegawai/daftar-pegawai.module#DaftarPegawaiPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'ruang-rapat', loadChildren: './pages/ruang-rapat/ruang-rapat.module#RuangRapatPageModule' },
  { path: 'kendaraan', loadChildren: './pages/kendaraan/kendaraan.module#KendaraanPageModule' },
  { path: 'kehadiran', loadChildren: './pages/kehadiran/kehadiran.module#KehadiranPageModule' },
  { path: 'entri-data', loadChildren: './pages/entri-data/entri-data.module#EntriDataPageModule' },
  { path: 'berita', loadChildren: './pages/berita/berita.module#BeritaPageModule' },
  { path: 'statistik', loadChildren: './pages/statistik/statistik.module#StatistikPageModule' },
  { path: 'maintenance', loadChildren: './pages/maintenance/maintenance.module#MaintenancePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
