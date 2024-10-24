# Rastreador da Estação Espacial Internacional (ISS)

Este projeto é uma página web interativa que rastreia a posição da Estação Espacial Internacional (ISS) e verifica se ela está passando sobre a sua localização atual. A página usa uma API pública para buscar a posição atual da ISS e exibir essas informações no navegador.

## Funcionalidades

- Verifica a posição atual da ISS em tempo real.
- Mostra a latitude e longitude da ISS no momento da consulta.
- Informa se a ISS está sobre a sua localização (com uma margem de erro de ±5 graus).
- Interface simples com a possibilidade de inserir sua latitude e longitude manualmente.
- A página já vem com valores pré-definidos de latitude e longitude para facilitar os testes.

## Estrutura do Projeto

- **index.html**: O arquivo HTML que define a estrutura da página web.
- **style.css**: O arquivo CSS que contém os estilos e o layout da página.
- **script.js**: O arquivo JavaScript que faz as requisições à API e processa as respostas para exibir os dados ao usuário.

## Como Funciona

1. Quando a página é carregada, você verá um título, dois campos de texto onde pode inserir sua latitude e longitude, e um botão para verificar a posição da ISS.
2. Os campos de latitude e longitude já estão preenchidos com os valores da cidade de Londres (latitude: `51.507351`, longitude: `-0.127758`), mas você pode substituí-los por suas próprias coordenadas.
3. Ao clicar no botão "Verificar Posição da ISS", a página faz uma requisição à API da ISS (International Space Station).
4. A API retorna a latitude e longitude atuais da ISS.
5. O script então compara a posição da ISS com as coordenadas inseridas pelo usuário.
6. Se a ISS estiver a ±5 graus da localização inserida, uma mensagem aparecerá dizendo que a ISS está "sobre sua localização". Caso contrário, será exibida a mensagem dizendo que a ISS não está visível no momento.

## Como Utilizar - Passos

1. **Baixar o projeto**: Faça o download dos arquivos do projeto ou clone o repositório para o seu computador.
2. **Estrutura de Arquivos**: Assegure-se de que os arquivos estejam organizados da seguinte forma:
   - `index.html` (página principal)
   - `style.css` (estilos)
   - `script.js` (lógica de interação com a API)
3. **Abrir no Navegador**: Abra o arquivo `index.html` no seu navegador. A página será carregada e você poderá inserir sua latitude e longitude e clicar no botão para verificar a posição da ISS.

### Utilizando a API

A página utiliza a [API pública da ISS](http://api.open-notify.org/iss-now.json) para buscar os dados da posição atual da estação espacial. Esta API retorna a posição em latitude e longitude da ISS em tempo real.

#### Exemplo de Resposta da API:

```json
{
  "timestamp": 1596569023,
  "iss_position": {
    "latitude": "19.0253",
    "longitude": "155.8057"
  },
  "message": "success"
}
