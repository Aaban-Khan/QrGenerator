let input = document.getElementById("input")
let button = document.getElementById("button")
let image = document.getElementById("img")

button.addEventListener("click", ()=>{

    let inputValue = input.value 
    if(!inputValue){
        alert("Please enter a URl")
        return
    } else{
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        image.alt = inputValue
    }
})