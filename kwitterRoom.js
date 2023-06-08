
//ADICIONE SEUS LINKS FIREBASE

  


/*
firebase - é utilizado para ajustar a referência para adicionar os dados ao banco de
dados.
database() - significa que queremos adicionar dados ao banco de dados.
 ref(“/”) - ref() significa a referência, em que queremos adicionar um nome de usuário
ao banco de dados.

“/” - isso significa que queremos adicionar o nome do usuário à raiz da pasta main.
child(userName) - child() função utilizada para fornecer o nome à pasta main.
userName é o nome da pasta main.

update - é a função firebase utilizada para atualizar o banco de dados com os valores.
 A pasta main, userName, não pode ser adicionada sozinha, portanto,
precisamos adicionar alguns valores.

 purpose is the key word for the value “adicionar usuário”.
 Você pode fornecer qualquer valor que desejar. Uma vez que objetivo desta
atividade era adicionar usuários, por isso fornecemos o valor como “adicionar
usuário”.
*/


userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";


function addRoom()
{
roomName = document.getElementById("roomName").value;

// Esta linha obtém o valor do elemento HTML com o ID "roomName" usando document.getElementById("roomName")

firebase.database().ref("/").child(roomName).update({

/*Esta linha usa o SDK do Firebase para acessar o banco de dados e cria uma referência à 
localização no banco de dados onde a sala será adicionada.
purpose : "adicionar nome de sala"*/

/*Esta linha usa o SDK do Firebase para acessar o banco de dados e 
cria uma referência à localização no banco de dados onde a sala será adicionada. 
A referência inicialmente é definida como a raiz ("/") do banco de dados, e em seguida, .child(roomName) 
é usado para adicionar um nó filho com o nome da sala (roomName). */

  });

    localStorage.setItem("roomName", roomName);
    window.location = "kwitterPage.html";
}

function getData() {  
  
  firebase.database().ref("/").on('value', function(snapshot) 
  { 
  document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) 
  { 
  childKey  = childSnapshot.key;
  roomNames = childKey;

  console.log("Nome da Sala - " + roomNames);
  row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
  document.getElementById ("output").innerHTML += row;
  });
  });

}

getData();
function redirectToRoomName(name)

{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
  
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";

}
