import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../Modelo/Cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/cliente'

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }

  agregarCliente(cliente:Cliente) {
    return this.http.post<Cliente>(this.Url, cliente);
  }


}
