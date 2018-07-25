var div = document.createElement("div"); //Aqui eh onde eu crio um novo elemento <div>
var body = document.getElementsByTagName("body"); //Aqui eh onde eu localizo o elemento <body> no meu documento HTML
function addDiv() {
	body.appendChild(div); //Aqui eh onde eu anexo o <div> criado dentro do <body> localizado no meu documento HTML
};

var divElt = document.getElementById("infos");
var formElt = document.querySelector("form");
var profile;
formElt.addEventListener("submit", function(a) {
	a.preventDefault(); //Aqui eh onde voce previne que a pagina fique recarregando
var userName = formElt.elements.profile.value; //Aqui eh onde eu vou pegar o input que foi colocado dentro do id profile contido no <form>
var url = "https://api.github.com/users/"+userName; //Aqui eh onde eu vou achar a URL de cada user
$.get(url, function(data) {
	profile = data;
	var namePrf = document.createElement("div");
	namePrf.textContent = profile.login;

	var urlPrf = document.createElement("div");
	urlPrf.textContent = profile.html_url;

	var avatPrf = document.createElement("img"); //Porque eu to adicionando uma imagem, eu preciso criar um <img>
	avatPrf.src = profile.avatar_url; //Porque eh uma imagem e nao um texto, eu uso src ao inves de textContent
	avatPrf.style.height = "460px";
	avatPrf.style.width = "460px";

	divElt.innerHTML = "";
	divElt.appendChild(namePrf);
	divElt.appendChild(urlPrf);
	divElt.appendChild(avatPrf);


});
});


