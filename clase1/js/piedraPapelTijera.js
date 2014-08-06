var piedra = 0;
var papel = 1;
var tijera = 2;

alert ("Vamos a jugar piedra, papel o tijera betch!!!");

function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var piedra = 0;
var papel = 1;
var tijeras = 2;

var options = ["Piedra", "Papel", "Tijeras"]

alert("Let's play Piedra, Papel, Tijeras!");

optionUser = prompt("Elige\n 0. Piedra\n 1. Papel\n 2. Tijeras", 0);
optionUser = parseInt(optionUser);

optionMachine = aleatorio(0,2);

alert ("Elegiste " + options[optionUser]);
alert ("La máquina eligió " + options[optionMachine]);


if (optionUser == piedra)
{
    if (optionMachine == piedra)
        alert("Empate!");
    
    if (optionMachine == papel)
        alert("lol, te chingó!!!");
    
    if (optionMachine == tijeras)
        alert("Ganaste mendigillo!!!");
    
    if (optionMachine == lagarto)
        alert("Ganaste mendigillo!!!");

    if (optionMachine == spock)
        alert("lol, te chingó!!!");
}

if (optionUser == papel)
{
    if (optionMachine == piedra)
        alert("Ganaste mendigillo!!!");
    
    if (optionMachine == papel)
        alert("Empate!");
    
    if (optionMachine == tijeras)
        alert("lol, te chingó!!!");
    
    if (optionMachine == lagarto)
        alert("lol, te chingó!!!");

    if (optionMachine == spock)
        alert("Ganaste mendigillo!!!");
}

if (optionUser == tijeras)
{
    if (optionMachine == piedra)
        alert("lol, te chingó!!!");
    
    if (optionMachine == papel)
        alert("Ganaste mendigillo!!!");
    
    if (optionMachine == tijeras)
        alert("Empate!");

    if (optionMachine == lagarto)
        alert("Ganaste mendigillo!!!");

    if (optionMachine == spock)
        alert("lol, te chingó!!!");    
}
