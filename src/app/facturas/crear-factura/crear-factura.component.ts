import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateCif } from 'src/app/validators/cif.validator';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;
  importeIVA: number = 0; // Creamos propiedades para campos calculados
  totalFactura: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.formFactura = new FormGroup({
      razonSocial: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [ValidateCif]),
      fecha: new FormControl((new Date()).toISOString().substring(0,10)),
      base: new FormControl(0),
      tipo: new FormControl(0.21),
      // importeIVA: new FormControl(0),
      // totalFactura: new FormControl(0)
    })
    console.log(this.formFactura);
    this.actualizarFactura();
  }

  actualizarFactura() {
    this.formFactura.valueChanges
                    .subscribe(objetoForm => {
                      // this.formFactura.get('importeIVA')
                      //                 .patchValue(objetoForm.base * objetoForm.tipo, {emitEvent: false})
                      // this.formFactura.get('totalFactura')
                      //                 .patchValue(objetoForm.base + objetoForm.base * objetoForm.tipo, {emitEvent: false})
                      this.importeIVA = objetoForm.base * objetoForm.tipo;
                      this.totalFactura = objetoForm.base + objetoForm.base * objetoForm.tipo
                    })
  }

  crearFactura() {
    
  }
}
