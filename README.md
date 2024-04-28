# controle-de-saidas

Este projeto consiste em um sistema de controle de retiradas de materiais de um almoxarifado, desenvolvido para auxiliar no gerenciamento de estoque de uma obra específica. A aplicação permite registrar as retiradas de materiais, verificar a disponibilidade dos itens em estoque e armazenar os dados de retirada em uma planilha do Google Sheets, utilizando a API do SheetsDB para integração.

## Funcionalidades

- **Seleção de Itens:** Os usuários podem selecionar os itens que desejam retirar do estoque de uma lista predefinida.
- **Verificação de Disponibilidade:** Antes de efetuar a retirada, a aplicação verifica se há quantidade suficiente do item em estoque.
- **Registro de Retiradas:** Os dados de cada retirada são registrados na planilha do Google Sheets, incluindo a data da retirada e a quantidade retirada de cada item.
- **Integração com API:** A aplicação utiliza a API do SheetsDB para consultar informações sobre o estoque de materiais e registrar as retiradas na planilha.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Biblioteca HTTP:** Axios (utilizado para fazer solicitações à API do SheetsDB)
- **Armazenamento de Dados:** As informações sobre as retiradas são armazenadas em uma planilha do Google Sheets, utilizando a API do SheetsDB para integração.

## API Utilizada: SheetsDB

A aplicação utiliza a API do SheetsDB para consultar informações sobre o estoque de materiais disponíveis e registrar as retiradas na planilha do Google Sheets. O SheetsDB permite acessar e manipular os dados de uma planilha como se fossem endpoints de API, facilitando a integração com aplicativos web.

## Como Contribuir

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue relatando problemas ou sugestões, ou enviar um pull request com melhorias.

