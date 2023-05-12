Feature: Validacao do formulario de contato

    Scenario: Enviar o formulario de contato
        Given acesso o blog Leticia Mota
        When acesso a sessao contate-me
        AND preencho todos os campos do formulario
        Then devo enviar minha mensagem com sucesso

    Scenario: Validar se campo e-mail é obrigatórios
        Given acesso o blog Leticia Mota
        When clico em enviar formulário sem preencher o campo e-mail
        Then devo visualizar um alerta de campo obrigatório

    Scenario: Validar se campo mensagem é obrigatórios
        Given acesso o blog Leticia Mota
        When clico em enviar formulário sem preencher o campo e-mail
        Then devo visualizar um alerta de campo obrigatório