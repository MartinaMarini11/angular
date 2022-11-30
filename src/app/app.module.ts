import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasListComponent } from './pizzas-list/pizzas-list.component';

import { FormsModule} from '@angular/forms';
import { PizzeriaContactoComponent } from './pizzeria-contacto/pizzeria-contacto.component';
import { PizzeriaPizzasComponent } from './pizzeria-pizzas/pizzeria-pizzas.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasListComponent,
    PizzeriaContactoComponent,
    PizzeriaPizzasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
