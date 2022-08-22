import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagesfoundComponent } from '../nopagesfound/nopagesfound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [  

  // path: '/dashboard'-->PagesRouting
  // path: '/auth'-->AuthRouting
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
