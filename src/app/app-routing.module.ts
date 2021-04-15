import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';

const routes: Routes = [
  {path: '', component: ListadoFacturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
