import { signal } from '@angular/core';
import { Contato } from '../models/contato';

export const listaDeContatos = signal<Contato[]>([])

