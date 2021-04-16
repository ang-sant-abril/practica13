import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  url = environment.urlEndpoint;

  constructor(private http: HttpClient) { }

  getFacturas(): any {
    return this.http.get(this.url + '/factura')
                    .pipe(
                      map((resp: any) => {
                        return resp;
                      })
                    )
  }

  getFactura(_id: any): any {
    return this.http.get(this.url + '/factura/' + _id)
    .pipe(
      map((resp: any) => {
        return resp;
      })
    )
  }

  postFactura(factura: any) {
    return this.http.post(this.url + '/factura', factura)
                    .pipe(
                      map((resp: any) => {
                        return resp;
                      })
                    )
  }

  putFactura(_id: any, factura: any) {
    return this.http.put(this.url + '/factura/' + _id, factura)
                    .pipe(
                      map((resp: any) => {
                        return resp;
                      })
                    )
  }


}
