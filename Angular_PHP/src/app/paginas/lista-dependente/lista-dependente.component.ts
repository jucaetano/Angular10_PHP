import { DependenteService } from './../../services/dependente.service';
import { Dependente } from './../../interfaces/dependente';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-dependente',
  templateUrl: './lista-dependente.component.html',
  styleUrls: ['./lista-dependente.component.css']
})
export class ListaDependenteComponent implements OnInit {

  public dependentes: Dependente[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private dependenteService: DependenteService) { }

  ngOnInit() {
    this.getListaDependentes();
  }

  getListaDependentes() {
    this.dependenteService.getListaDependentes()
      .subscribe((dependentes: Dependente[]) => {
        this.dependentes = dependentes;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar a lista de dependentes.'); });
  }

  deletaDependente(id: number) {
    this.dependenteService.deletaDependente(id)
      .subscribe(() => {
        this.getListaDependentes();
      }, () => { this.errorMsgComponent.setError('Falha ao excluir o dependente.'); });
  }

  existemPessoas(): boolean {
    return this.dependentes && this.dependentes.length > 0;
  }

}
