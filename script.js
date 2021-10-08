
const numberarray=[i]; //Skapar fältet numberarray
var j = 0; //Skapar variabel j och ger den värdet 0.

for(var i=0; i<10; i++) //For-loop som går om 10 gånger.
{
    j++; // Öka j med 1 varje loop
    numberarray[i] = Math.floor(Math.random() * 101); //Skapa slumpmässiga värden med max tal 100 i fältet.



    if(numberarray[i] == numberarray[i-j]) // Försök att slumpa om ett tal om det redan finns i fältet. (Fungerar inte)
    {
        numberarray[i] = Math.floor(Math.random() * 101); // Försök att slumpa om ett tal om det redan finns i fältet. (Fungerar inte)
    }
}


var saved = numberarray; //sparar det gamla fältet innan den sorteras.
console.log(saved); //skriver ut fältet in consolen.

document.getElementById("u1").innerHTML  = numberarray[0]; //Skriver ut fältet i ett table 
document.getElementById("u2").innerHTML  = numberarray[1]; //Skriver ut fältet i ett table 
document.getElementById("u3").innerHTML  = numberarray[2]; //Skriver ut fältet i ett table 
document.getElementById("u4").innerHTML  = numberarray[3]; //Skriver ut fältet i ett table 
document.getElementById("u5").innerHTML  = numberarray[4]; //Skriver ut fältet i ett table 
document.getElementById("u6").innerHTML  = numberarray[5]; //Skriver ut fältet i ett table 
document.getElementById("u7").innerHTML  = numberarray[6]; //Skriver ut fältet i ett table 
document.getElementById("u8").innerHTML  = numberarray[7]; //Skriver ut fältet i ett table 
document.getElementById("u9").innerHTML  = numberarray[8]; //Skriver ut fältet i ett table 
document.getElementById("u10").innerHTML = numberarray[9]; //Skriver ut fältet i ett table 

numberarray.sort(function(a, b) {return a - b;}); //sorterar fältet genom sort och en funktion. 
console.log(numberarray); //skriver ut det nya fältet in consolen.

document.getElementById("s1").innerHTML  = numberarray[0]; //Skriver ut fältet i ett table 
document.getElementById("s2").innerHTML  = numberarray[1]; //Skriver ut fältet i ett table 
document.getElementById("s3").innerHTML  = numberarray[2]; //Skriver ut fältet i ett table 
document.getElementById("s4").innerHTML  = numberarray[3]; //Skriver ut fältet i ett table 
document.getElementById("s5").innerHTML  = numberarray[4]; //Skriver ut fältet i ett table 
document.getElementById("s6").innerHTML  = numberarray[5]; //Skriver ut fältet i ett table 
document.getElementById("s7").innerHTML  = numberarray[6]; //Skriver ut fältet i ett table 
document.getElementById("s8").innerHTML  = numberarray[7]; //Skriver ut fältet i ett table 
document.getElementById("s9").innerHTML  = numberarray[8]; //Skriver ut fältet i ett table 
document.getElementById("s10").innerHTML = numberarray[9]; //Skriver ut fältet i ett table 



//Kontouppgift

function login() //Skapar funktionen login.
{
var undata = document.getElementById('uname').value; //Hämtar värdet för det man skriver in i username.
var psdata = document.getElementById('pass').value; //Hämtar värdet för det man skriver in i password.
var cpdata = document.getElementById('cpass').value; //Hämtar värdet för det man skriver in i confim password.
var emdata = document.getElementById('email').value; //Hämtar värdet för det man skriver in i email.

    if ( undata != " " && undata != null && psdata != " " && psdata != null && emdata != " " && emdata != null && document.getElementById('check').checked) //Kollar så att alla värden stämmer och är ifyllda.
    {
        window.open("https://kenjisakurai.github.io/Produktsidan/"); //Går till en annan hemsida när man lyckas skapa kontot.

        alert("Created account successfully"); //Skickar alert.


    }

    else if (undata == "" || undata == null) //Kollar om username inte är ifylld.
    {
        alert("Username is missing."); //Skickar alert om username.
    }

    else if ( psdata == "" || psdata == null) //Kollar om password inte är ifylld.
    {
        alert("Password is missing."); //Skickar alert om password.
    }

    else if ( cpdata != psdata) //Kollar om passwords matchar.
    {
        alert("passwords do not match."); //Skickar alert om password.
    }

    else if ( emdata == "" || emdata == null) //Kollar om email inte är ifylld.
    {
        alert("Email missing."); //Skickar alert om email.
    }

    else{
        alert("Checkbox not checked."); //Skickar alert om checkbox.
    }

} 
