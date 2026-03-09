async function sendMessage(){

const input = document.getElementById("input");
const chat = document.getElementById("chat");

const message = input.value;

if(!message) return;

chat.innerHTML += `<div class="user">${message}</div>`;

input.value="";

chat.innerHTML += `<div class="ai">AI typing...</div>`;

const response = await fetch("http://localhost:3000/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
});

const data = await response.json();

chat.lastChild.innerHTML=data.reply;

chat.scrollTop=chat.scrollHeight;

}

document.getElementById("input").addEventListener("keypress",function(e){

if(e.key==="Enter"){
sendMessage();
}

});