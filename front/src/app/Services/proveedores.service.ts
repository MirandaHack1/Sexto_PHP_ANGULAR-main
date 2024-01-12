import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproveedor } from '../Interface/iproveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private urlBase: string =
  'http://localhost/Sexto_PHP_ANGULAR-Main/Inventario/Controllers/Proveedor.Controller.php?op=';
constructor(private cliente: HttpClient) {}

todos(): Observable<Iproveedor[]> {
  return this.cliente.get<Iproveedor[]>(this.urlBase + 'todos');
}

}
