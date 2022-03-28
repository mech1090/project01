console.dir(document)
const body = document.querySelector('body')
const h1 = document.createElement('h1')
h1.textContent = 'hello'
body.appendChild(h1)

let theme = true

const button = document.createElement('button')
button.textContent = 'Dark Mode'
body.appendChild(button)

button.addEventListener('click', () =>{
    if (theme){
        body.style.backgroundColor='black'
        h1.style.color = 'white'

    }else{
        body.style.backgroundColor='white'
        h1.style.color='black'
    }
    theme = !theme

})

const listItems = document.querySelectorAll('.item')
listItems.forEach(listItem =>{
    listItem.style.color='blue'
})

const buttonItems = document.querySelectorAll('.btn')

buttonItems.forEach(buttonItem =>{
    buttonItem.addEventListener('click',(e)=>{
        console.log('button clicked',e.target.textContent)
        e.target.style.backgroundColor = 'red'
    })
})


