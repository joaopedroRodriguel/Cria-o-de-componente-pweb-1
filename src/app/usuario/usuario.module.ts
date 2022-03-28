import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [CadastroUsuarioComponent, ListagemUsuarioComponent],
    exports: [
        CadastroUsuarioComponent,
        ListagemUsuarioComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class UsuarioModule { }
