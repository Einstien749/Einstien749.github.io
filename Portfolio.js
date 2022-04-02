/* Developer: Odimayo Taiye; Project:My Portfolio*/

/* Variable declaration and Assignment. */
var message = " Odimayo Taiye, FrontEnd Developer.\n He is dedicated to creating commercial and genuine partnerships by developing cutting edge User Interface(UI) for web applications.With few years of experience, he specializes in earning trust of others although he worked mainly as a freelancer ";
var i = 0;
var aboutdialog = "close";



/*Event Functions*/

function Mouseover(name){
    document.getElementById(String(name)).style.backgroundColor = "rgba(0,255,0,0.8)";
}
function Mouseout(name){
    document.getElementById(String(name)).style.backgroundColor = "rgba(255,255,255,0.8)";
}
function Writee(text){
    let h = document.getElementById("be").innerHTML;
    document.getElementById("be").innerHTML = String(h) + text[i];
    i = i + 1;
}
function showProjects(){
    document.getElementById("myprojects").showModal();
}
function closeProjects(){
    document.getElementById("myprojects").close();
}


/* Continously running script*/

setInterval(function(){
    if(i<message.length){Writee(message);}
    },100);
