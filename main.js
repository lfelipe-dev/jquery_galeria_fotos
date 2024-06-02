$(document).ready(function(){
    // Esta função é executada quando o documento HTML foi totalmente carregado e está pronto.

    $('header button').click(function(){
        // Quando o botão dentro do header é clicado, esta função é executada.
        $('form').slideDown();
        // A função slideDown() é chamada no formulário para exibi-lo com uma animação deslizante.
    }); 

    $('#cancelar').click(function(){
        // Quando o botão com o id 'cancelar' é clicado, esta função é executada.
        $('form').slideUp();
        // A função slideUp() é chamada no formulário para ocultá-lo com uma animação deslizante.
    });

    $('form').on('submit', function(e){
        // Esta função é executada quando o formulário é submetido.

        e.preventDefault();
        // Previne o comportamento padrão do formulário (que seria recarregar a página).

        const novaImagemUrl = $('#endereco-imagem-nova').val();
        // Obtém o valor do campo de input com o id 'endereco-imagem-nova', que é a URL da nova imagem.

        const novoItem = $('<li style="display: none"></li>');
        // Cria um novo elemento <li> com estilo 'display: none' para que ele seja inicialmente invisível.

        $(`<img src="${novaImagemUrl}" alt="Nova imagem">`).appendTo(novoItem);
        // Cria um elemento <img> com o src definido para a URL da nova imagem e um atributo alt.
        // Em seguida, anexa este <img> ao novo <li>.

        $(`
            <div class="overlay-imagem-link">
                <a href="${novaImagemUrl}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        // Cria um <div> com a classe 'overlay-imagem-link' que contém um link para a imagem em tamanho real.
        // Anexa este <div> ao novo <li>.

        novoItem.appendTo('ul');
        // Adiciona o novo <li> à lista <ul> existente no documento.

        novoItem.fadeIn(1000);
        // Exibe o novo <li> gradualmente usando a animação fadeIn com duração de 1000 milissegundos (1 segundo).

        $('#endereco-imagem-nova').val('');
        // Limpa o campo de input de URL, definindo seu valor como uma string vazia.

        $('form').slideUp();
        // Oculta o formulário novamente após a submissão bem-sucedida.
    });
});