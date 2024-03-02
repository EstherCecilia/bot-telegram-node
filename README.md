# Meu Bot Universitário

Este é um bot desenvolvido utilizando o Telegraf para o Telegram. O objetivo deste bot é facilitar a vida dos estudantes universitários, fornecendo informações úteis sobre horários de aula, boletos pendentes e lembretes sobre a data de vencimento da fatura do TIM.

## Funcionalidades

- Recupera os horários de aula da faculdade para o dia atual ou para um dia específico da semana.
- Permite ao usuário verificar uma lista de boletos pendentes.
- Fornece lembretes sobre a data de vencimento da fatura do TIM.

## Como Usar

1. Adicione o bot ao seu Telegram procurando por `@nome_do_bot`.
2. Inicie uma conversa com o bot.
3. Use os seguintes comandos para interagir com o bot:
    - `/start`: Inicia a conversa e exibe uma mensagem de boas-vindas.
    - `aula`: Recupera os horários de aula da faculdade.
    - `boleto`: Mostra uma lista de boletos pendentes.
    - `tim`: Fornece informações sobre a data de vencimento da fatura do TIM.

## Como Instalar e Executar

1. Clone este repositório:
    ```
    git clone https://github.com/seu_usuario/meu-bot-universitario.git
    ```

2. Instale as dependências do projeto:
    ```
    npm install
    ```

3. Renomeie o arquivo `.env.example` para `.env` e adicione o token do seu bot do Telegram.

4. Execute o projeto:
    ```
    node index.js
    ```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades.

