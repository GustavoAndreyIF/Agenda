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
  numeroContatoInvalido = signal(false);

  contatoModel = signal<Contato>({
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    tipo: tipoContato.Outros as string,
  })

  contatoForm = form(this.contatoModel, (schemaPath) => (
    required(schemaPath.nome, { message: 'O nome é obrigatório' }),
    minLength(schemaPath.nome, 3, { message: 'O nome deve conter pelo menos 3 caracteres' }),

    required(schemaPath.telefone, { message: 'Telefone é obrigatório' }),
    pattern(schemaPath.telefone, /^\(\d{2}\) \d{5}-\d{4}$/, {
      message: 'Telefone deve estar no formato (XX) XXXXX-XXXX'
    }),

    email(schemaPath.email, { message: 'Email inválido' })
  ))
selectedValue: any;

  adicionarContato() {
    this.agendaService.checarTelefoneExistente(this.contatoModel().telefone).subscribe(exists => {
      if (exists) {
        this.numeroContatoInvalido.set(true);
        return;
      }

      if (this.contatoForm.nome().valid()
        && this.contatoForm.telefone().valid()
        && this.contatoForm.tipo().valid()
      ) {
        const novoContato = this.contatoModel();
        this.agendaService.adicionarContato(novoContato).subscribe({
          next: () => {
            this.contatoModel.set({
              nome: '',
              telefone: '',
              email: '',
              aniversario: '',
              tipo: tipoContato.Outros as string,
            });
            this.contatoForm().reset();
            this.agendaService.adicionarContatosNaLista();
          }
        });
      }
    }
    );
  }
}
