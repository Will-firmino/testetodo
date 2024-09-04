## Trabalhando com elementos da classe

`usuarioSelecionado = DUMMY_USERS[usuarioAleatorio];`
1. Aqui estamos criando uma variável. Dentro da classe, não precisamos utilizar let e nem const. O valor dessa variável deverá ser um dos usuários do arquivo dummy-users.ts.
ps. Não se esquecer de importar o DUMMY_USERS.

## Saida de conteúdo dinâmico com interpolação de strings

1. Agora, no arquivo `user.component.ts`, iremos utilizar a interpolação de strings para utilizar os atributos do usuário aleatório. Fazemos isso utilizando `{{}}`.
<span>{{ usuarioSelecionado.name }}</span>

## Utilizando imagem do usuário como propriedade
1. Agora, queremos apresentar a imagem do usuário. Para isso podemos utilizar o chamado `Vinculação de propriedade` em angular.


2. Estamos passando o assets/users/ que é o caminho aonde estão as imagens e depois o usuarioSelecionado.avatar para selecionar o avatar gerado de forma aleatória.
<img src="'assets/users/' + usuarioSelecionado.avatar" alt="{{ usuarioSelecionado.name }}">

[src] -> Toda vez que formos chamar a imagem precisamos passar a propriedade [src] entre cochetes.

## Usando o método getter para receber os valores
1. Até agora, no arquivo `user.component.html` estamos passando a imagem com o caminho no próprio HTML. Isso não é uma boa prática. Por isso, precisamos ir no arquivo `user.component.ts` e dentro da classe `UserComponent` utilizar o seguinte código:
<img [src]="avatarUsuario" alt="{{ usuarioSelecionado.name }}">

## Mudando estados e alterando dados
1. Nesse momento, queremos que o usuário altere toda vez que o `button` em `user.component.html` for clicado e não quando a página for atualizada. Par aisso, vamos fazer algumas alterações no arquivo `user.component.html`.
