import { Component } from "@angular/core";
import { DUMMY_USERS } from "../../dummy-users";

// Constante criada para gerar um usuário aleatório
    const usuarioAleatorio = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})

export class UserComponent {

    usuarioSelecionado = DUMMY_USERS[usuarioAleatorio];
    
    get avatarUsuario() {
        return 'assets/users/' + this.usuarioSelecionado.avatar
    }

    onUsuarioSelecionado() {
        const usuarioAleatorio = Math.floor(Math.random() * DUMMY_USERS.length);
        this.usuarioSelecionado = DUMMY_USERS[usuarioAleatorio];
    }

}