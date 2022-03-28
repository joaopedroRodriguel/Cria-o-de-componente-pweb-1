import { Component, OnInit } from '@angular/core';
import {USUARIOS} from "../../shared/model/db_usuarios";
import {Usuario} from "../../shared/model/usuario";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios = USUARIOS

  constructor() { }

  ngOnInit(): void {
  }

  editar(usuario: Usuario): void {
    usuario.nome += 'alterado';
  }

  deletar(usuario: Usuario): void {
    const indxUsuarioRemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
    if (indxUsuarioRemover > -1) {
      this.usuarios.splice(indxUsuarioRemover, 1);
    }
  }
}
