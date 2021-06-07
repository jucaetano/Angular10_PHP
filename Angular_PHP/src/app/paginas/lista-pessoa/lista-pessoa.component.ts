import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  public pessoas: Pessoa[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getListaPessoas();
  }

  getListaPessoas() {
    this.pessoaService.getListaPessoas()
      .subscribe((pessoas: Pessoa[]) => {
        this.pessoas = pessoas;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar a lista de pessoas.'); });
  }

  deletaPessoa(id: number) {
    this.pessoaService.deletaPessoa(id)
      .subscribe(() => {
        this.getListaPessoas();
      }, () => { this.errorMsgComponent.setError('Falha ao excluir a pessoa.'); });
  }

  existemPessoas(): boolean {
    return this.pessoas && this.pessoas.length > 0;
  }

}
