import { inject, Service } from '@angular/core';
import { Contato, ContatoPayload } from '../models/contato';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Service()
export class AgendaService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/contatos';


    adicionarContato(novoContato: Omit<Contato, 'id'>): Observable<Contato> {
        return this.http.post<Contato>(this.apiUrl, novoContato);
    }

    removerContato(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    procurarContato(id: string): Observable<Contato> {
        return this.http.get<Contato>(`${this.apiUrl}/${id}`);
    }
    /**
     * Retorna true se o telefone já existe na lista de contatos, caso contrário retorna false.
     * @param telefone O telefone a ser verificado.
     * @returns Um Observable<boolean> indicando se o telefone já existe ou não.
     */
    checarTelefoneExistente(telefone: string): Observable<boolean> {
        return this.http.get<Contato[]>(`${this.apiUrl}?telefone=${telefone}`).pipe(
            map(contatos => contatos.length > 0)
        );
    }

    listarContatos(): Observable<ContatoPayload[]> {
        return this.http.get<ContatoPayload[]>(this.apiUrl);
    }
}

