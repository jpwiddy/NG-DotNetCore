import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Lazy async modules
  {
    path: 'login', loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register', loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'profile', loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

export const routing = RouterModule.forRoot(routes);
