import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'howto',
    loadChildren: () => import('./howto/howto.module').then( m => m.HowtoPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'add-aed',
    loadChildren: () => import('./add-aed/add-aed.module').then( m => m.AddAedPageModule)
  },
  {
    path: 'success-register',
    loadChildren: () => import('./success-register/success-register.module').then( m => m.SuccessRegisterPageModule)
  },
  {
    path: 'my-aed',
    loadChildren: () => import('./my-aed/my-aed.module').then( m => m.MyAedPageModule)
  },
  {
    path: 'add-aed2',
    loadChildren: () => import('./add-aed2/add-aed2.module').then( m => m.AddAed2PageModule)
  },
  {
    path: 'member2',
    loadChildren: () => import('./member2/member2.module').then( m => m.Member2PageModule)
  },
  {
    path: 'success-aed',
    loadChildren: () => import('./success-aed/success-aed.module').then( m => m.SuccessAedPageModule)
  },
  {
    path: 'success-aed',
    loadChildren: () => import('./success-aed/success-aed.module').then( m => m.SuccessAedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
