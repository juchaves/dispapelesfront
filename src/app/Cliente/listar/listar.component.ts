import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ClienteService } from '../../Servicios/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private servicio:ClienteService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.getClientes()
    .subscribe( data=> {
      this.clientes = data;
    })
    ;
  }

}
