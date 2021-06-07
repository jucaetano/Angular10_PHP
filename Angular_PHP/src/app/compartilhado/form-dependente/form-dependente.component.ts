import { Dependente } from '../../interfaces/dependente';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-dependente',
  templateUrl: './form-dependente.component.html',
  styleUrls: ['./form-dependente.component.css']
})
export class FormDependenteComponent  {
  @Input() dependente: Dependente = <Dependente>{};
  @Output() outputDependente: EventEmitter<Dependente> = new EventEmitter();

  onSubmit() {
    this.outputDependente.emit(this.dependente);
  }

}
