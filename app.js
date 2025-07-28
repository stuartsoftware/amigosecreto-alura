// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let addedFriends = [];

function agregarAmigo() {
    let textBoxString = document.getElementById('friendName').value;
    if (textBoxString === '') {
        alert("Por favor, ingrese un nombre")
    } else {
        addedFriends.push(textBoxString);
        document.getElementById('friendName').value = "";
        printList();

        return;
    }
}

function printList() {
    let friends = document.querySelector('#friend-appear');
    friends.innerHTML = '';
    for (let i = 0; i < addedFriends.length; i++) {
        friends.innerHTML += `<li>${addedFriends[i]}</li>`;
    }
    return;
}


function sortearAmigo() {
    
    if (addedFriends == "") {
        alert("No hay amigos agregados.")
    } else {
        let friendNumbersRandom = Math.floor(Math.random() * addedFriends.length);
        let winner = document.querySelector('h2');
        winner.innerHTML = `El ganador es: ${addedFriends[friendNumbersRandom]}`
        // console.log(friendNumbersRandom);
        // console.log(addedFriends[friendNumbersRandom]);
        return;
    }
    
}

