import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/interfaces/pessoa';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private pessoaService: PessoaService, private router: Router) { }

  addPessoa(pessoa: Pessoa) {
    this.pessoaService.addPessoa(pessoa)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao adicionar pessoa.'); });
  }

}
