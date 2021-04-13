import { Injectable } from '@angular/core';
import { datos, datosPersona } from '../other/interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlAPI = 'https://randomapi.com/api/k3xihx1o?key=88ZG-55VI-GTGG-CVGE';

  constructor(private http: HttpClient) { }

  getDatos(): Observable<datosPersona<datos[]>> {
    return this.http.get<datosPersona<datos[]>>(this.urlAPI);
  }
}
