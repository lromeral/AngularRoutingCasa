import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaisComponent } from './pais/pais.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'paises', component: PaisesComponent},
  { path: 'pais/:id', component: PaisComponent},
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
export const routingComponents=[ HomeComponent, PaisesComponent, NotFoundComponent, PaisComponent];
