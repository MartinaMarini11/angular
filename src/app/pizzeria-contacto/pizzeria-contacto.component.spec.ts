import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaContactoComponent } from './pizzeria-contacto.component';

describe('PizzeriaContactoComponent', () => {
  let component: PizzeriaContactoComponent;
  let fixture: ComponentFixture<PizzeriaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeriaContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeriaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
