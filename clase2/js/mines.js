function boom()
{
	document.write("KABoOoOoooOOOOOoooOOOOM!!!<br />");
}

function live()
{
	document.write("YISUS CRAIST!!! Casí mueres amigo OMG!!!<br />");
}

function rdm(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var field = [ [ rdm(0,1) , rdm(0,1) , rdm(0,1) ],
			  [ rdm(0,1) , rdm(0,1) , rdm(0,1) ],
			  [ rdm(0,1) , rdm(0,1) , rdm(0,1) ] ];

var options = [ "Pastito", "BOMBA" ];

alert("Estas en un campo minado ZOMFG!!!");
x = prompt("Elige entre 0 y 2 para tu posición horizontal: ");
y = prompt("Elige entre 0 o 2 para tu posición vertical: ");

var picked = field[x][y];
/*document.write(picked);*/

if (x <= 2 && y <= 2)
{
	if (picked == 0)
	{
		document.write("Eleigste el " + options[picked] + "<br />");
		live();
	}
	
	else
	{
		document.write("Eleigste un pedazo en donde hay una " + options[picked] + " viejo!!! <br />");
		boom();
	}		
}

else
{
	document.write("Te saliste del campo viejo... 1, 2, 3 <br />");
	boom();
}