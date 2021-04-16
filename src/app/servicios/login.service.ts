import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.urlEndpoint;

  constructor(private http: HttpClient) { }

  login(credenciales: any) {
    return this.http.post(this.url + '/login', credenciales)
                    .pipe(
                      map((resp: any) => {
                        return resp
                      })
                    )
  }

}
