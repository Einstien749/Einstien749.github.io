function Enter(me){
    let initvalue = document.getElementById("screenpara").innerHTML;
    document.getElementById("screenpara").innerHTML = String(initvalue) + String(me); 
}

function Delete(){
    if(String(document.getElementById("screenpara").innerHTML).length>0){
        let k = String(document.getElementById("screenpara").innerHTML);
        document.getElementById("screenpara").innerHTML= k.substring(0,k.length-1);
    }
}
function Message(){
    alert("This is a partial implementation of a calculator(full implementation coming soon).\nFor proper behavior use: \n(a)One and only one(1) operator in a calculation.\n(b)Only valid numbers during calculations.\n\n\nThanks for the visit.");
}

function Operation(me){
    let p = document.getElementById("screenpara").innerHTML;
    if(isNaN(p)){
        
    }
    else{
        document.getElementById("screenpara").innerHTML = String(p) + String(me);
    }
}
function Answer(){
    let p = document.getElementById("screenpara").innerHTML;
    let sign ;
    let number1;
    let number2;
    let ind;
    if(isNaN(p)){
        if(p.length == 0){
            
        }
        else{
            for(var i=0; i<p.length;i++){
                if(isNaN(p[i]) && (p[i]!=".")){
                    sign = String(p[i]);
                    ind = i;
                }
            }
            number1 = Number(p.substring(0,ind));
            number2 = Number(p.substring(ind+1,p.length));
            if(sign == "+"){
                document.getElementById("screenpara").innerHTML = String(number1 + number2);
            }
            else if(sign == "-"){
                document.getElementById("screenpara").innerHTML = String(number1 - number2);
            }
            else if(sign == "X"){
                document.getElementById("screenpara").innerHTML = String(number1 * number2);
            }
            else if(sign == "/"){
                document.getElementById("screenpara").innerHTML = String(number1/number2);
            }
        }
    }
    else{
        alert("Alert! Alert!! Alert!!! \n\nNo Operation Specified");
    }
}
