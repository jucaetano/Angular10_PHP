
import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { DependenteService } from '../../services/dependente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dependente } from './../../interfaces/dependente';

@Component({
  selector: 'app-editar-dependente',
  templateUrl: './editar-dependente.component.html',
  styleUrls: ['./editar-dependente.component.css']
})
export class EditarDependenteComponent {
  public dependente: Dependente = <Dependente>{};
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private dependenteService: DependenteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getDependente(this.activatedRoute.snapshot.params.id);
    }

    getDependente(id: number) {
      this.dependenteService.getDependente(id)
        .subscribe((dependente: Dependente) => {
          this.dependente = this.dependente;
        }, () => { this.errorMsgComponent.setError('Falha ao buscar os dados do dependente.'); });
    }

    atualizaDependente(dependente: Dependente) {
      this.dependenteService.atualizaDependente(dependente)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { this.errorMsgComponent.setError('Falha ao atualizar os dados do dependente.'); });
    }

}
