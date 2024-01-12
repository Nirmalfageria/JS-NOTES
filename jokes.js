
let myJokes= (['vfchdjsvdvlk ','bfueibhgvkjbvds','fgvdeswfvvh']);
let index = Math.floor(Math.random()*(myJokes.length-1))
console.log(index)
console.log(myJokes.length)
joke.innerHTML = myJokes[index]
console.log(myJokes[index])
//insertion methods for insert the new element

//by using inner html
let a =document.getElementById("joke");
a.innerHTML =a.innerHTML +'<b >my name is nirmal fageria</b >';
// By creating a div

let div1 = document.createElement('div')
div1.innerHTML='hello I am a div';
a.appendChild(div1)

// insert the aDJACENT HTML
a.insertAdjacentHTML("beforebegin",'<div class="first1 div1">hello I am  beforebegin</div>')

// to remove a node
let first1 =document.getElementsByClassName("first1")
// first1.remove()
// a.remove()  
// joke.remove()

// classname and classlist
let clist =document.getElementById("clist")
clist.classList
clist.className ="text-color red "

// set Timeout and set Interval

let ai =setTimeout(function(){
    alert("Hey how are you")
} , 2000)

console.log(ai)

// let sum = (a,b,c)=>{
//     alert("I am running (a+b+c)") ;a+b+c
//     console.log(a+b+c)
// }
//  setInterval(sum ,2000, 1,3,2)

