import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependente } from './../interfaces/dependente';

@Injectable({
  providedIn: 'root'
})
export class DependenteService {
  PHP_API_SERVER = "http://localhost/api";
  constructor(private http: HttpClient) { }

  getListaDependentes(): Observable<Dependente[]>{
		return this.http.get<Dependente[]>(`${this.PHP_API_SERVER}/dependente-index.php`);
  }

  getDependente(id: number): Observable<Dependente>{
		return this.http.get<Dependente>(`${this.PHP_API_SERVER}/dependente-resgata-pessoa.php/?id=${id}`);
  }

  addDependente(dependente: Dependente): Observable<Dependente> {
		return this.http.post<Dependente>(`${this.PHP_API_SERVER}/dependente-create.php`, dependente);
  }

  atualizaDependente(dependente: Dependente): Observable<Dependente> {
		return this.http.put<Dependente>(`${this.PHP_API_SERVER}/dependente-update.php`, dependente.id);
  }

  deletaDependente(id: number): Observable<Dependente> {
		return this.http.delete<Dependente>(`${this.PHP_API_SERVER}/dependente-delete.php/?id=${id}`);
  }
}
