// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// // here p is promise
// p.then((response)=>{
// console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("Error is there in fetching the data")
// })

// post request without using async function

// let contact={
//     method: "POST",
//     headers:{
//         "Content-type":"application/json"
//     },
//     body:
//         JSON.Stringify({
//             title:"nirmal",
//         body:"bhai",
//         userId:"1000"
//         }),
//     }

//     fetch("https://jsonplaceholder.typicode.com/posts" , contact)
//     .then((response)=>{
//          response.json()
//     }).then((value)=>{
//         console.log(json)
//     })

// cookies

// alert(document.cookie)
// document.cookie="name = nirmal"
// document.cookie="fageri+a"
// document.cookie="nirmal_fageria"
// alert(document.cookie)

// console.log(document.cookie)

// Encode cookies 
// let key =prompt("enter your key")
// let value =prompt("enter your value")
// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// // console.log(document.cookie)
// decodeURIComponent(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)

// local storage
// let key = prompt("enter your key ")
// let value = prompt("enter your value ")
// localStorage.setItem(key ,value)
// console.log(`The value  of the key ${key} is ${localStorage.getItem(key)}`)
// // localStorage.getItem(key)
// // localStorage.removeItem(key)
// if(key ==0){
// localStorage.clear()}
// localstorage.length


// session storage

// storage event
// window.onstorage =(e)=>{ 
//     alert("changed")
// console.log(e)
// }