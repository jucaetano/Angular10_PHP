import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { DependenteService } from '../../services/dependente.service';
import { Router } from '@angular/router';
import { Dependente } from '../../interfaces/dependente';

@Component({
  selector: 'app-criar-dependente',
  templateUrl: './criar-dependente.component.html',
  styleUrls: ['./criar-dependente.component.css']
})
export class CriarDependenteComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private dependenteService: DependenteService, private router: Router) { }

  addDependente(dependente: Dependente) {
    this.dependenteService.addDependente(dependente)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao adicionar dependente.'); });
  }

}
