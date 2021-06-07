import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaPessoaComponent } from './paginas/lista-pessoa/lista-pessoa.component';
import { FormPessoaComponent } from './compartilhado/form-pessoa/form-pessoa.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';
import { CriarDependenteComponent } from './paginas/criar-dependente/criar-dependente.component';
import { EditarDependenteComponent } from './paginas/editar-dependente/editar-dependente.component';
import { ListaDependenteComponent } from './paginas/lista-dependente/lista-dependente.component';
import { FormDependenteComponent } from './compartilhado/form-dependente/form-dependente.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaPessoaComponent,
    FormPessoaComponent,
    CriarPessoaComponent,
    EditarPessoaComponent,
    CriarDependenteComponent,
    EditarDependenteComponent,
    ListaDependenteComponent,
    FormDependenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
