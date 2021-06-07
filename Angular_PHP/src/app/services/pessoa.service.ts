import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  PHP_API_SERVER = "http://localhost/api";
  constructor(private http: HttpClient) { }

  getListaPessoas(): Observable<Pessoa[]>{
		return this.http.get<Pessoa[]>(`${this.PHP_API_SERVER}/index.php`);
  }

  getPessoa(id: number): Observable<Pessoa>{
		return this.http.get<Pessoa>(`${this.PHP_API_SERVER}/resgata-pessoa.php/?id=${id}`);
  }

  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
		return this.http.post<Pessoa>(`${this.PHP_API_SERVER}/create.php`, pessoa);
  }

  atualizaPessoa(pessoa: Pessoa): Observable<Pessoa> {
		return this.http.put<Pessoa>(`${this.PHP_API_SERVER}/update.php`, pessoa.id);
  }

  deletaPessoa(id: number): Observable<Pessoa> {
		return this.http.delete<Pessoa>(`${this.PHP_API_SERVER}/delete.php/?id=${id}`);
  }

}
