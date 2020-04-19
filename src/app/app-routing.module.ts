import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InicioComponent, PerfilComponent]