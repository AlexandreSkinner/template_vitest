# Criar a pasta da aplicação.
Cria a pasta do Projeto como uma subpasta de **projeto**.

```
~/projeto
» mkdir compras
» cd compras
compras on  master [?]
```
# Inicializar o GIT
Este comando inicia o controle de versão do código fonte em repositório local

```
~/projeto/compras
» git init
```
# Inicializar o projeto
  Este comando cria um arquivo do projeto denominado **package.json** que
  controla as dependências das bibliotecas utilizadas no projeto.

```
~/projeto/compras
» npm init -y
```
# Instalar biblioteca git-commit-msg-linter
Esta biblioteca é responsavel por padronizar as mensagens dos nossos commit. Segue o padrão do conventional commit, bloqueando commit que não estiverem em conformidade com este padrão.
 _"Conventional Commit"_.
  [Site conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

```
~/projeto/compras
» npm i -D git-commit-msg-linter
```
# Instalar o Typescript
Instala o compilador da linguagem de programação Typescript e os types do *node* que adicina tipagem ao mesmo, ajudando no intellisence dos comandos

```
~/projeto/compras
» npm i -D typescript @types/node
```
# Inicializando projeto Typescript.
  Cria o arquivo de configuração do compilador typescript (tsconfig.json)
```
  ~/projeto/compras
  » npx tsc --init
```
Como o typescript foi instalado como dependencia de desenvolvimento temos que utilizar o comando **npx** para executar o compilador **tsc**

## Arquivo de configuração do Typescript (tsconfig.json)

Este arquivo é inspecionado pelo typescript no momento da compilação
```
{
  "compilerOptions": {
<<<<<<< HEAD
    "incremental": true,                        // Compilação incremental
    "target": "es2022",                         // Versão do javascript gerada na transpilação
    "module": "ESNext",                         // Tipo do modulo
    "sourceMap": true,                          // Mapeia código js p/ ts (viabiliza debug no TS)
    "removeComments": true,                     // Remove comentários
    "esModuleInterop": true,                    // Premite interoperabilidade entre js e ts
    "rootDirs": ["src","test"],                 //
    "outDir": "./dist",                         // Armazena o código javascript (build)
    "moduleResolution": "node",                 //
    "strict": true,                             //
    "skipLibCheck": true,                       // Não realizar check de sintaxe em lib de terceiros
    "forceConsistentCasingInFileNames": true,   //
=======
    "incremental": true,
    "target": "es2022",
    "module": "CommonJS",
    "sourceMap": true,
    "removeComments": true,
    "esModuleInterop": true,
    "rootDirs": ["src","test"],
    "outDir": "./dist",
    "moduleResolution": "node",
    "strict": true,
    "noEmitOnError": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
>>>>>>> c96893a (chore: adiciona ao tsconfig.json instrução p/ não transpilar código com erro)
    "paths": {
      "@/*": ["*"],
      "@/test/*": ["../test/*"]
    },
    "baseUrl": "src"
  },
  "include": ["src", "test", "vitest.config.ts"],
  "types": ["vitest/globals"]
}
```

# Instalando o ESLINT
Realiza a instalação do eslint, bem como configura o padrão da sintaxe do typescript tendo por base as regras definidas no style standard-with-typescript.
```
  ~/projeto/compras
  » npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-plugin-node

```
```
npm install --save-dev eslint eslint-plugin-stanrd eslint-pluging-promise eslint-plugin-import eslint-plugin-node @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
  ## Inicializando o eslint
  O eslint serve para pontuar erros de sintaxe e formatar o código fonte que estiver fora da especificação standard javascript style.
```
  ~/projeto/compras
  » npm init @eslint/config

```
Abaixo temos um exemplo do arquivo de configuração do eslint **.eslintrc.json**

## Arquivo de configuração do lint (.eslintrc.json)
```
{
  "env": {
      "es2021": true,
      "node": true,
      "jest": true
  },
  "extends": "standard-with-typescript",
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": ["./tsconfig.json"]
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
      "@typescript-eslint/semi": "off",
      "semi": [2, "always"]
  }
}
```
# Instalando o husky
  Permite utilizarmos os hook do git para garantir que não iremos commitar código fora das
  diretrizes parametrizadas no eslint e que não estiverem passando no teste de unit do jest
```
    ~/projeto/compras
    » npm install husky -D
    » npm install -D lint-staged
```
  A biblioteca lint-stage determina que o lint e jest atuem apenas nos arquivos que se encontram na staged area do git.

    O primeiro comando instala o husky, criando a pasta de mesmo nome.
    O segundo comando cria arquivo de pre-commit com o comando que está entre aspas dentro dele.
    Fazendo com que um commit que não passe no teste realizado pelo Jest não seja efetivado.
```
    ~/projeto/compras
    » npx husky install
    » npx husky add .husky/pre-commit "npx lint-staged"
```
## Arquivo do lintstaged (lintstagedrc.json)
```
{
  "*.ts": [
    "eslint 'src/**' --fix",
    "npm run test:staged"
  ]
}
```
<<<<<<< HEAD
# Instalando o Jest.
  Instala o Jest, a biblioteca de tipos para o typescript. Instala também o ts-jest.
=======
# Instalando o Vitest.
  Instala o Vitest, a biblioteca de teste para o typescript.
>>>>>>> c96893a (chore: adiciona ao tsconfig.json instrução p/ não transpilar código com erro)

  O ts-jest é um transformador Jest com suporte a mapa de origem que permite usar Jest para testar projetos escritos em TypeScript.
  Ele oferece suporte a todos os recursos do TypeScript, incluindo verificação de tipo
```
  ~/projeto/compras
  » npm install -D vitest
```
<<<<<<< HEAD
  ## Inicializando o jest.
  Por padrão, o Jest pode ser executado sem nenhum arquivo de configuração, mas não compilará .ts arquivos. Para fazer a transpilação do TypeScript com ts-jest, precisaremos criar um arquivo de configuração que dirá ao Jest para usar uma ts-jestpredefinição.

  A inicialização do Jest cria um arquivo de configuração **jest.config.js**
```
    ~/projeto/compras
    » npm jest --init
```
Abaixo temos um exemplo de arquivo de configuração do jest
=======
Abaixo temos um exemplo de arquivo de configuração do Vitest
>>>>>>> c96893a (chore: adiciona ao tsconfig.json instrução p/ não transpilar código com erro)

## Arquivo de configuração do Vitest (vitest.config.js)
```
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/test": path.resolve(__dirname, "./test"),
    },
  },
});
```
  ## Executando os teste.
  Para executar o jest direto ou através de um script
```
  ~/projeto/compras
  » npx vitest
  » npm run <script>
```

  ## Snippet para Vitest.
  Abaixo temos um snippet para evitarmos digitar código repetido toda vez
  que formos elaborar um teste. O texto do prefixo é chave para "buscar" o snippet.
```
{
  "Jest Test": {
    "prefix": ["test"],
      "body": [
        "describe('$1', () => {",
        "  test('$2', () => {",
        "$3",
        "  });",
        "});",
        ""
      ],
    "description": "A describe block for Jest"
  }
}
```
## Script para execução do Vitest
```
"scripts": {
    "test": "vitest",
    "test:staged": "vitest related ./test/*.spec.ts --run",
    "test:coverage": "vitest run --coverage"
}
```
# Prepara o buid
Para que o código javascript gerado na compilação tenha a capacida de resolver os import do tipo '@/index'
é necessário instalas duas bibliotecas como dependencia de desenvolvimento.

```
  ~/projeto/compras
  » npm i tsc-alias tsconfig-paths -D
```
Além disso precisamos editar o script build no arquivo package.json

```
"scripts": {
  "build": "tsc -p tsconfig-build.json && tsc-alias"
}
```

## Arquivo tsconfig-build
Este arquivo tem por objetivo impedir que os códigos
da pasta **test** sejam buildados (transpilados para javascript).

```
{
  "extends": "./tsconfig.json",
  "exclude": ["test"]
}
```

Para isso temos que passando o parâmetro abaixo, no script de buid

```
tsc -p tsconfig-build.json
```
##

# Videos do YouTube de referencia
https://www.youtube.com/watch?v=RO3l_xy7GeM

https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
