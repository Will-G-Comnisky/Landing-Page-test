$(document).ready(function () {
  // máscara para o campo de telefone:
  $("#telefone").mask("(00) 00000-0000");

  // regras de validação para o formulário:
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: false,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: {
        required: "Por favor, informe o seu nome",
      },
      email: {
        required: "Por favor, informe o seu e-mail",
        email: "Por favor, informe um e-mail válido",
      },
      mensagem: {
        required: "Por favor, informe a sua mensagem",
      },
    },
    submitHandler: function (form) {
      // O que fazer ao submeter o formulário (ex.: enviar via AJAX)
    },
  });
});
