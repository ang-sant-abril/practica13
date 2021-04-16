import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NumeroPipe } from 'src/app/pipes/numero.pipe';

import { CrearFacturaComponent } from './crear-factura.component';

describe('Test Formulario crear factura', () => {
  let component: CrearFacturaComponent;
  let fixture: ComponentFixture<CrearFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ CrearFacturaComponent, NumeroPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación del componente', () => {
    expect(component).toBeTruthy();
  });

  it('Tiene los campos fecha y tipo de IVA', () => {
    expect(component.formFactura.contains('fecha')).toBeTruthy();
    expect(component.formFactura.contains('tipo')).toBeTruthy();
  })

  it('Campo razon social requerido', () => {
    const control = component.formFactura.get('razonSocial');
    control.setValue('');
    expect(control.valid).toBeFalsy()
  })

});
