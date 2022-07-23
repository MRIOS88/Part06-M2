//23'22''franco mejora el codigo.
const showFriends = function () { 
    let lista = $('#lista');
    lista.empty(); // lista.innerHTML = "";
    $.get('http://localhost:5000/amigos', response => {//response es el nombre del arg de la arrow function, podria tener cualquier nombre como e, element, elemento, etc
        for (let i = 0; i < response.length; i++) {
            let cross = `<button onclick="deleteFriend(${response[i].id})">x</button>`
            let li = `<li>${response[i].name} ${cross}</li>`;//devuelve el nombre de cada amigo
            //ahora q la variable li tiene lo q quiero, hay q agregarlo al Dom, en el lugar correspondiente.Por eso la linea 3 crea la referencia de donde ubicarlos
            lista.append(li);//append es el equivalente de appendChild, crea etiquetas hijas.
        }
    });
}

//voy a hacer la hw con jquery, aunq no se vuelva a usar. Se puede hacer tambien como siempre document.querySelector....
$('#boton').click(showFriends);

$('#search').click(() => {
    let inputValue = $('#input').val();
    $.get(`http://localhost:5000/amigos/${inputValue}`, response => {
        $(`#amigo`).text(response.name);
    });
    $('#input').val('');
});

const deleteFriend = function (idFriend) {
    $.ajax({
        url: `http://localhost:5000/amigos/${idFriend}`,
        type: 'DELETE',
        success: () => {
            $('#success').text('El amigo fue eliminado exitosamente');
            showFriends();
        }
    });
}
$('#delete').click(() => {
    let inputValue = $(`#inputDelete`).val();
    deleteFriend(inputValue);
    $(`#inputDelete`).val('');
});