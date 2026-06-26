import { signal } from '@angular/core';
import { ContatoPayload } from '../models/contato';

export const listaDeContatos = signal<ContatoPayload[]>([])

