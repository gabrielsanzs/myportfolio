var iconswitch = document.getElementById('switch');

iconswitch.onclick = function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        iconswitch.src = "./src/img/sun.png";
    } else {
        iconswitch.src = "./src/img/moon.png";
    }
};