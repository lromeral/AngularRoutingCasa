import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'paises', component: PaisesComponent},
  { path: 'paises/:id', component: PaisesComponent},
  { path: '**', component: NotFoundComponent}
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
export const routingComponents=[ HomeComponent, PaisesComponent, NotFoundComponent];
