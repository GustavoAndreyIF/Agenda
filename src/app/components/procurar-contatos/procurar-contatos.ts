import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, minLength, pattern } from '@angular/forms/signals';
import { AgendaService } from '../../service/agenda-service';

@Component({
  selector: 'app-procurar-contatos',
  imports: [FormField],
  templateUrl: './procurar-contatos.html',
  styleUrl: './procurar-contatos.css',
})
export class ProcurarContatos {
  private readonly agendaService = inject(AgendaService);

  buscarModel = signal<string>('');
  buscarForm = form(this.buscarModel, (schemaPath) => (
    minLength(schemaPath, 3, { message: 'O nome deve conter pelo menos 3 caracteres' })
  ));

  buscarContatoPorNome() {
    if (this.buscarForm().valid()) {
      const nome = this.buscarModel();
      this.agendaService.atualizarContatosNaListaDaPesquisaPorNome(nome);
    }
  }
}
