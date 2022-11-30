import { PizzeriaContactoComponent } from './pizzeria-contacto/pizzeria-contacto.component';
import { PizzeriaPizzasComponent } from './pizzeria-pizzas/pizzeria-pizzas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch:'full'
  },
  {
    path: 'pizzas',
    component: PizzeriaPizzasComponent
  },
  {
    path: 'contacto',
    component: PizzeriaContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
