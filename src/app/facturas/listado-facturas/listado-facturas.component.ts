import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/servicios/facturas.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  facturas: any;
  cargando: boolean = true;

  constructor(private facturasService: FacturasService) { }

  ngOnInit(): void {
    this.cargaFacturas();
  }
  
  cargaFacturas() {
    this.facturasService.getFacturas()
                        .subscribe((resp: any) => {
                          this.cargando = false;
                          this.facturas = resp.facturas;
                        }, (err: any) => {
                          this.cargando = false;
                          console.log(err);
                        })
  }

  deleteFactura(_id: any) {
    this.facturasService.deleteFactura(_id)
                        .subscribe((resp: any) => {
                          console.log(resp);
                          this.cargaFacturas();
                        }, (err: any) => {
                          console.log(err)
                        })
  }

}
