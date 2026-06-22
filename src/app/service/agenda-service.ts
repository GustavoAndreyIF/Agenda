import { Service, Signal, signal } from '@angular/core';
import { Contato, tipoContato } from '../models/contato';
import { listaDeContatos } from '../shared/lista-de-contatos';

@Service()
export class AgendaService {

    adicionarContato(novoContato: Contato): void {
        listaDeContatos.update((contatos) => [...contatos, novoContato]);
    }

    removerContato(){}

    procurarContato(){}

  }

