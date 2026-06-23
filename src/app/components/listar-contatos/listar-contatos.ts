import { Component, inject } from '@angular/core';
import { tipoContato, Contato } from '../../models/contato';
import { AgendaService } from '../../service/agenda-service';

@Component({
  selector: 'app-listar-contatos',
  imports: [],
  templateUrl: './listar-contatos.html',
  styleUrl: './listar-contatos.css',
})
export class ListarContatos {
  private readonly agendaService = inject(AgendaService);
  
  contatos: Contato[] = [];
  tipoContato = tipoContato;

  public exibeListaDeContatos(): void {
    this.agendaService.listarContatos().subscribe({
      next: (contatos) => {
        this.contatos = contatos;
      },
      error: (error) => {
        console.error('Erro ao listar contatos:', error);
      }
    });
  }
}
