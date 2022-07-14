import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private servicio:ClienteService) { }

  modeloCliente = new Cliente();


  ngOnInit(): void {
  }

  Guardar(cliente:Cliente) {
    this.servicio.agregarCliente(cliente)
      .subscribe(data => {
        alert("Se agregó con exito");
        this.router.navigate(["listar"]);
      })
  }

}
