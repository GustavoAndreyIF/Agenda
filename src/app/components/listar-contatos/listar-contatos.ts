import { Component, OnInit, inject } from '@angular/core';
import { tipoContato } from '../../models/contato';
import { AgendaService } from '../../service/agenda-service';
import { listaDeContatos } from '../../shared/lista-de-contatos';

@Component({
  selector: 'app-listar-contatos',
  imports: [],
  templateUrl: './listar-contatos.html',
  styleUrl: './listar-contatos.css',
})
export class ListarContatos implements OnInit {
  private readonly agendaService = inject(AgendaService);
  readonly listaDeContatos = listaDeContatos;

  tipoContato = tipoContato;

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos(): void {
    this.agendaService.adicionarContatosNaLista();
  }

  removerContato(id: string): void {
    this.agendaService.removerContato(id).subscribe({
      next: () => {
        this.carregarContatos();
      },
      error: (error) => {
        console.error('Erro ao remover contato:', error);
        this.carregarContatos();
      }
    });
  }
}
