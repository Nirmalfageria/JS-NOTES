// IIFE

// let a=()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(30)
//         }, 2000);
//     })
// }

// (async()=>{
//     let b = await a() 
//     console.log(b)
//     let c = await a() 
//     console.log(c)
//     let d = await a() 
//     console.log(d)
// })()

// Destructing

// let arr =[11,22,3,4,45,23,45,]

// let [p,q]=arr
// console.log(p,q)

// let[p, , r,...rest] =arr
// console.log(p,r,rest)

// let[p,q ,r,...rest] =arr
// console.log(p,q,r,rest)

// Sperad syntex
// let arr1 =[11,22,3,4,45,23]
// let obj1 = {...arr1}
// console.log(obj1)

// function sum (v1,v2,v3){
//     return v1+v2+v3
// }
// console.log(sum(...arr1)) // like this we can pass an array to the function

// let obj2 ={
//     name:"nirmal",
//     company :"google",
//     userid :"nirmal15"
// }
// console.log({...obj2 ,name:"fageria"})
// console.log({name:"fageria" , ...obj2}) // it will print obj2 without any changes beacuse it works on overwrite concept

//Hosting
ax()
function ax(){
    console.log("good morning")
}
console.log(a)
var a =5;  // Declaratoion hosted to the top but intization is not
console.log(a)

// console.log(b)
let b =5;  // Declaratoion hosted to the top but intization is not but in the case of let e we cannot access b brfore intization(same with the const)
console.log(b)

console.log(greet) // we cannot hosted function and class expression before intization it is not like the variables in the case of let and const
 let greet = function (){
    console.log("good morning")
}
