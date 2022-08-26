import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
   
        {
          path: 'login',
          component: LoginComponent,
        },
      /*  {
          path: 'request-password',
          component: NbRequestPasswordComponent,
        },
  */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {

}