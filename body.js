const body = document.getElementsByTagName("body")[0];


function Color(color) {
    body.style.backgroundColor=color;
}


function randomColor(){
    const red= Math.round(Math.random()*255)
    const blue= Math.round(Math.random()*255)
    const green= Math.round(Math.random()*255)
    const random=`rgb(${red},${blue},${green})`
    body.style.backgroundColor=random
}
