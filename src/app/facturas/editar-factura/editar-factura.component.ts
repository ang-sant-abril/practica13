import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturasService } from 'src/app/servicios/facturas.service';
import { ValidateCif } from 'src/app/validators/cif.validator';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.css']
})
export class EditarFacturaComponent implements OnInit {

  _id: number;
  formFactura: FormGroup;
  importeIVA: number = 0; // Creamos propiedades para campos calculados
  totalFactura: number = 0;

  constructor(private ruta: ActivatedRoute,
              private router: Router,
              private facturasService: FacturasService) { }

  ngOnInit(): void {
    this._id = this.ruta.snapshot.params._id;
    this.formFactura = new FormGroup({
      razonSocial: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [ValidateCif]),
      fecha: new FormControl((new Date()).toISOString().substring(0,10)),
      base: new FormControl(0),
      tipo: new FormControl(0.21),
      // importeIVA: new FormControl(0),
      // totalFactura: new FormControl(0)
    })
    this.actualizarFactura();
    this.facturasService.getFactura(this._id)
                        .subscribe((resp: any)=>{
                          this.formFactura.patchValue(resp.factura);
                          // this.formFactura.get(<campo>).patchValue(<resp.factura.campo>)
                        },(err: any)=>{
                          console.log(err);
                        })
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

  editarFactura() {
    this.facturasService.putFactura(this._id, this.formFactura.value)
                        .subscribe((resp: any) => {
                          console.log(resp);
                          this.router.navigate(['/listado-facturas']);
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}
