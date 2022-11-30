import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaPizzasComponent } from './pizzeria-pizzas.component';

describe('PizzeriaPizzasComponent', () => {
  let component: PizzeriaPizzasComponent;
  let fixture: ComponentFixture<PizzeriaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeriaPizzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeriaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
