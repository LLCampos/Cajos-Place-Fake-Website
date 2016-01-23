$( document ).ready(function() {


    var content_home = "<h4>Welcome to Cajo's Place Website</h4>"

    var content_menu = "<ul><li>Caril de Lentilhas</li><li>Soja à Bolonhesa</li><li>Masse com Bróculos</li><li>Sopa do Cajó</li><li>Papas de Aveia Nojentas</li></ul>"

    var content_contacts = "<p><strong>Telefone:</strong> 267848484</p><p><strong>Morada:</strong> Rua Salvador Carvalho dos Santos Nº7 1ºFt</p>"

    $('#main-content').html(content_home);

    $(".tab").on('click', function() {

        $(".tab-selected").toggleClass("tab-selected");
        $(this).toggleClass("tab-selected");

        var tab_clicked = $(this).text();

        $("#main-section-header").find('h2').text(tab_clicked);

        if (tab_clicked == 'Home') {
            $('#main-content').html(content_home);
        } else if (tab_clicked == 'Menu') {
            $('#main-content').html(content_menu);
        } else {
            $('#main-content').html(content_contacts);
        }




    });

});
