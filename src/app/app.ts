import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AdcionarContato } from "./components/adcionar-contato/adcionar-contato";
import { listaDeContatos } from './shared/lista-de-contatos';
import { tipoContato } from './models/contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdcionarContato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contatos = listaDeContatos;
  tipoContato = tipoContato;

  ngOnInit(){
    initFlowbite();
  }
}
