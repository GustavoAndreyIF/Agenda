import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, email, minLength, pattern } from '@angular/forms/signals';
import { Contato, tipoContato } from '../../models/contato';
import { AgendaService } from '../../service/agenda-service';

@Component({
  selector: 'app-adcionar-contato',
  imports: [FormField],
  templateUrl: './adcionar-contato.html',
  styleUrl: './adcionar-contato.css',
})
export class AdcionarContato {
  private readonly agendaService = inject(AgendaService);

  contatoModel = signal<Contato>({
    id: Math.floor(Math.random() * 1000),
    nome: '',
    telefone: '',
    email: '',
    aniversario: new Date(),
    tipo: tipoContato.Outros as string,
  })

  contatoForm = form(this.contatoModel, (schemaPath) => (
    required(schemaPath.nome, { message: 'O nome é obrigatório' }),
    minLength(schemaPath.nome, 3, { message: 'O nome deve conter pelo menos 3 caracteres' }),

    required(schemaPath.telefone, { message: 'Telefone é obrigatório' }),
    pattern(schemaPath.telefone, /^\d{2}9?\d{8}$/, {
      message: 'Telefone deve estar no formato (XX) XXXXX-XXXX'
    }),

    email(schemaPath.email, { message: 'Email inválido' })
  ))

  adicionarContato() {
    if (this.contatoForm.nome().valid() && this.contatoForm.telefone().valid() && this.contatoForm.tipo().valid()) {
      const novoContato = this.contatoModel();

      this.agendaService.adicionarContato(novoContato)

      this.contatoModel.set({
        id: Math.floor(Math.random() * 1000),
        nome: '',
        telefone: '',
        email: '',
        aniversario: new Date(),
        tipo: tipoContato.Outros as string,
      });
    }
  }
}
