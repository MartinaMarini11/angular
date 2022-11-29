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
    stock : 50,
    imagen : "assets/img/muzzarella.jpg",
    oferta : false,
  },
  {
    nombre : "Especial",
    ingredientes: "Jamón y morrón",
    precio : 1200,
    stock : 48,
    imagen : "assets/img/muzzarella.jpg",
    oferta : true,
  },
  {
    nombre : "Fugazza",
    ingredientes: "Cebolla y muzzarella",
    precio : 1200,
    stock : 0,
    imagen : "assets/img/muzzarella.jpg",
    oferta : false,
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}

