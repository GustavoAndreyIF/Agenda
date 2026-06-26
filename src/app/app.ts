import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AdcionarContato } from "./components/adcionar-contato/adcionar-contato";
import { ListarContatos } from "./components/listar-contatos/listar-contatos";
import { AgendaService } from './service/agenda-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdcionarContato, ListarContatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private agendaService = inject(AgendaService);
  ngOnInit() {
    this.agendaService.adicionarContatosNaLista()
    initFlowbite();
  }
}
