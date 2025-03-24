const input =document.getElementById("input")
function reverse(str){
    return str.split("").reverse().join("")
}

function check(){
    const value=input.value
    const rev=reverse(value)

    if(value==rev)  {
        alert("ITS A PALINDROME")
    }
    else{
        alert("its not a palindrome")
    }

}
