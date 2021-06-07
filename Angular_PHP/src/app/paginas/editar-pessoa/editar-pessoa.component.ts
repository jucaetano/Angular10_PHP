import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../interfaces/pessoa';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent {
  public pessoa: Pessoa = <Pessoa>{};
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getPessoa(this.activatedRoute.snapshot.params.id);
    }

    getPessoa(id: number) {
      this.pessoaService.getPessoa(id)
        .subscribe((pesssoa: Pessoa) => {
          this.pessoa = this.pessoa;
        }, () => { this.errorMsgComponent.setError('Falha ao buscar os dados da pessoa.'); });
    }

    atualizaPessoa(pessoa: Pessoa) {
      this.pessoaService.atualizaPessoa(pessoa)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { this.errorMsgComponent.setError('Falha ao atualizar os dados da pessoa.'); });
    }

}
