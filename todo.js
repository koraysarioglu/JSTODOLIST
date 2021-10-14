let aDOM = document.querySelector('#todoapp')
aDOM.addEventListener('submit', yazdir)
function yazdir(event) {
    event.preventDefault()
    const inputtext1 = document.querySelector("#inputtext")
    const alertDOM = document.querySelector('#alert')
    const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
    if (inputtext1.value ) {
        addItem(inputtext1.value) 
        inputtext1.value = "" 

    } else {
        alertDOM.innerHTML = alertFunction(
            "UYARI:",
            "Eksik Bilgi Girdiniz",
        )
    }
}
let aktivitelistesiDOM = document.querySelector('#aktivitelistesi')

for (var i = 0; i < (localStorage.length); i){
    let liDOM = document.createElement('li')
liDOM.innerHTML = localStorage.key(i)
aktivitelistesiDOM.append(liDOM)
var span = document.createElement('span')
var text = document.createTextNode('X')  
span.className="close"
span.appendChild(text)
liDOM.appendChild(span)
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div=this.parentElement
    div.style.display="none"
    }
}

liDOM.addEventListener("click", function(a){
    liDOM.style.textDecoration = 'line-through'
})
}

const addItem = (inputtext) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${inputtext} 
    `
    localStorage.setItem( `${inputtext}`, `${inputtext}`)
    aktivitelistesiDOM.append(liDOM)
    var span = document.createElement('span')
    var text = document.createTextNode('X')
    span.className="close"
    span.appendChild(text)
    liDOM.appendChild(span)
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div=this.parentElement
        div.style.display="none"
        }
    }
    liDOM.addEventListener("click", function(a){
        liDOM.style.textDecoration = 'line-through'
    })
    deleteItem()
}
 
let resetdom = document.querySelector('#sifirla')
resetdom.addEventListener("click", clickevent)
function clickevent() {
    console.log(this.id)
    if(this.id == "sifirla"){
        localStorage.clear()
        var liDOM = document.querySelectorAll("li");
        for (var i = 0; i < liDOM.length; i++) {
            liDOM[i].remove()
    }
}
}

