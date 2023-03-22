# Boobam Test

### Rodar o projeto
Realize o clone do projeto e instale os pacotes
```
git clone https://github.com/junior-anzolin/boobam-test.git
cd boobam-test
npm install
```

Realize o build com o comando `npm run build` e abra o arquivo `dist/index.html` no seu navegador

### Decisões do projeto

- Typescript: Utilizei o typescript para realizar a tipagem de todos os objetos e funções dentro da tela, isso facilita a manutenção da aplicação.
- Sass: O Sass utilizei com o objetivo de trabalhar com váriaveis de cores, reutilizar códigos que seriam dúplicados se fizesse apenas com o CSS e assim melhorar a qualidade do código.
- Gulp: Esse pacote foi solicitado no momento do teste, mas utilizei para realizar o build dos arquivos de typescript e sass para javascript e css.
- Gulp-concat: Utilizei esse pacote com o objetivo de que o build tivesse apenas um arquivo de estilo e lógica para ser importado dentro do HTML.
- Gulp-esbuild: Utilizei esse pacote com o objetivo de melhorar a performance dos scripts criados.
- Templates no HTML: Essa aplicação tem muitos itens que se repetem na tela, com isso, utilizando a tag `template` do HTML criei os modelos, com o javascript eu populei esses modelos e injetei na tela.