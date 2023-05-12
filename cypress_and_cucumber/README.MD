# README

## PROJETO EM CONSTRUÇÃO ##

## Projeto de automação do Blog pessoal Leticia Mota ###

## Para executar localmente o projeto, siga os passos:

1. Faça o clone ou download do projeto.
2. Verifique se possui node e npm instalado:
```
  node --version && npm --version
```
3. Acesse o diretório e execute via terminal o comando que fará a instalção do framework Cypress na versão
utilizada no projeto:
```
  npm install --save-dev cypress cypress-cucumber-preprocessor
```

4. Após a instalação, execute o comando para abrir o Cypress e executar os testes automatizados:

```
  npx cypress open
```

## Estrutura do Projeto ##

1. integration: nesta pasta colocamos os nossos arquivos com os cenários de teste escritos no formato Gherkin.

2. plugin/index.js: este arquivo é destinado para configuração de plugins. Utilizamos ele ao configurar o Cucumber.

2. support: dentro desta pasta temos as pastas com os elements (elementos da aplicação que serão utilizados na automação), pageObjects (scripts feitos em Cypress) e steps (nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em Gherkin e os scripts que fazemos em Cypress.)
