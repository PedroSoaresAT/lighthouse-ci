<div align="center">
  <img src="public/logo.svg" width="400">
  <h1 style="margin-top: 16px;">PROJECT_NAME</h1>
</div>

Projeto responsável pelo...

## ❗️ Renomear projeto

Para renomear o projeto, execute o script `./scripts/rename.sh` com o nome do projeto como argumento, exemplo:

```bash
./scripts/rename.sh web-fm-seo-br
```

A pasta `scripts` será deletada automaticamente após a conclusão. Essa seção do README também será removida.

## ✏️ Criado com

- [Nuxt](https://nuxt.com/)
- [Vue](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)

## 🚀 Execução

Para executar o projeto, utilize o `start.sh` na pasta `fm-docker` ou suba o container manualmente:

```bash
docker-compose up -d PROJECT_NAME
```

**ATENÇÃO**: o container instala as dependências e executa o servidor automaticamente, não é necessário rodar nenhum comando de `build` ou `dev` manualmente.

## ⚙️ Ativando modo de desenvolvimento

Edite o arquivo `.env` da pasta `fm-docker`, alterando o valor da variável `DEV_UPPERCASE_PROJECT_NAME` de `0` para `1`. Reinicie o container do projeto para aplicar as alterações.

## 🧪 Testes

Para executar os testes, utilize o comando:

```bash
yarn test
```

## 📖 Storybook

Para executar o Storybook, utilize o comando:

```bash
yarn storybook
```

Por padrão, o Storybook irá executar na porta `6006`, caso ela já não esteja sendo utilizada. Caso contrário, verifique o log no terminal para saber em qual endereço e porta o Storybook está acessível.