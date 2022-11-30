import { Component, OnInit } from '@angular/core';
import { Pizza } from './Pizza';


@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit {

  pizzas : Pizza[]= [
  {
    nombre : "Muzzarella",
    ingredientes: "Muzzarella y aceitunas",
    precio : 1000,
    stock : 5,
    imagen : "assets/img/muzzarella.jpg",
    oferta : false,
    quantity:0,
  },
  {
    nombre : "Especial",
    ingredientes: "Jamón y morrón",
    precio : 1200,
    stock : 4,
    imagen : "assets/img/muzzarella.jpg",
    oferta : true,
    quantity:0,
  },
  {
    nombre : "Fugazza",
    ingredientes: "Cebolla y muzzarella",
    precio : 1200,
    stock : 0,
    imagen : "assets/img/muzzarella.jpg",
    oferta : false,
    quantity:0, 
  },
];
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity (pizza: Pizza) : void {
    if (pizza.quantity < pizza.stock)
      pizza.quantity++;
  }

  downQuantity(pizza : Pizza) : void {
    if  (pizza.quantity>0)
    pizza.quantity--;
}

}

