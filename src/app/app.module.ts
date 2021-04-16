import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { NumeroPipe } from './pipes/numero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoFacturasComponent,
    CrearFacturaComponent,
    NumeroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
