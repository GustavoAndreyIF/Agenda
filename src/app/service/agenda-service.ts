import { inject, Service } from '@angular/core';
import { Contato } from '../models/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class AgendaService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/contatos';

    adicionarContato(novoContato: Omit<Contato, 'id'>): Observable<Contato> {
        return this.http.post<Contato>(this.apiUrl, novoContato);
    }

    removerContato() { }

    procurarContato() { }

}

