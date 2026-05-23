$(document).ready(function () {

    const $form = $('#form-tarefa');
    const $input = $('#nome-tarefa');
    const $lista = $('#lista-tarefas');

    $lista.append(`
        <li class="vazia">
            Nenhuma tarefa cadastrada.
        </li>
    `);

    $form.on('submit', function (e) {

        e.preventDefault();

        const tarefa = $input.val().trim();

        if (tarefa === '') {
            return;
        }

        $('.vazia').remove();

        const $novaTarefa = $('<li></li>')
            .text(tarefa)
            .hide();

        $lista.append($novaTarefa);

        $novaTarefa.fadeIn(300);

        $input.val('');
        $input.focus();
    });

    $lista.on('click', 'li:not(.vazia)', function () {

        $(this).toggleClass('concluida');

        if ($(this).hasClass('concluida')) {

            $(this)
                .stop()
                .animate({
                    paddingLeft: '28px'
                }, 120);

        } else {

            $(this)
                .stop()
                .animate({
                    paddingLeft: '16px'
                }, 120);
        }
    });
});