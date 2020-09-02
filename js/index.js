let i = 0;
let txt = 'I am an engineering undergrad from India who loves technology and communities.'
let speed = 50;
function typewriter(){
    if(i<txt.length){
        document.getElementById("info").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
};

window.onload = typewriter();
