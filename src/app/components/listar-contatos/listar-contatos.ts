import { Component, OnInit, inject } from '@angular/core';
import { tipoContato, ContatoPayload } from '../../models/contato';
import { AgendaService } from '../../service/agenda-service';

@Component({
  selector: 'app-listar-contatos',
  imports: [],
  templateUrl: './listar-contatos.html',
  styleUrl: './listar-contatos.css',
})
export class ListarContatos implements OnInit {
  private readonly agendaService = inject(AgendaService);

  contatos: ContatoPayload[] = [];
  tipoContato = tipoContato;

  ngOnInit() {
    this.exibeListaDeContatos()
  }

  exibeListaDeContatos(): void {
    this.agendaService.listarContatos().subscribe({
      next: (contatos) => {
        this.contatos = contatos;
      },
      error: (error) => {
        console.error('Erro ao listar contatos:', error);
      }
    });
  }

  removerContato(id: string): void {
    this.agendaService.removerContato(id).subscribe({
      next: () => {
        this.exibeListaDeContatos();
      },
      error: (error) => {
        console.error('Erro ao remover contato:', error);
        this.exibeListaDeContatos();
      }
    });
  }
}
