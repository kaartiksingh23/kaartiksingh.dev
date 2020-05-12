
var introductoryText= 'Hello World ! ';
var i=0;

function typingEffect(){
    if(i<introductoryText.length){
        document.getElementById("screen-output").innerHTML += introductoryText.charAt(i);
        i++;
        setTimeout(typingEffect,100);
    }
  
}

typingEffect();
