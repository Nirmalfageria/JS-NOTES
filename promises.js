// .then() and .catch()
// let p1 = new Promise((resolve ,reject)=>{
//     console.log("p1 is pending");
//     setTimeout(()=>{
//         console.log("p1 is resolve")
//         resolve(true)
//     },4000)
// })
// let p2 = new Promise((resolve ,reject)=>{
//     console.log("p2 is pending")
//     setTimeout(()=>{
//         console.log("p2 is reject")
//         reject(new Error("I an an error"))
//     },4000)
// })

// p1.then((value)=>{
// console.log(value)
// ,(error)=>{
//     console.log(value)
// }
// })
// // p2.then((value)=>{
// // console.log(value)
// // ,(error)=>{
// //     console.log(value)
// // }
// // })
// p2.catch((error)=>{
//     console.log("some error is there")
// })

// load script using promises

// const loadScript=(src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement('script')
//             script.src =src;
//             script.onload=(script)=>{
//                 resolve(true)
//             }
//             document.appendChild(script)
//             script.onerror=()=>{
//                 reject(0)
//             }
//     })
// }
// let p=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// p.then((value)=>{
//     console.log(value)
//     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// }).then((value)=>{
//     console.log("second script is loaded")
// }).catch((error)=>{
//     console.log("We got some error")
// })

// promise API
// let q1= new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },4000)
// })
// let q2= new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve(2)
//         reject(new Error("Error is there"))
//     },2000)
// })
// let q3= new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(3)
//     },3000)
// })

// // let promise_all =Promise.all([q1,q2,q3])
// // let promise_all =Promise.allSettled([q1,q2,q3])
// // let promise_all =Promise.race([q1,q2,q3])
// // let promise_all =Promise.any([q1,q2,q3])
// // let promise_all =Promise.resolve(4)
// // let promise_all =Promise.reject(9)

// promise_all.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
//     console.log("Got some error")
// })

// Async function
// const wheather = async ()=>{
//  let delhi = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('21 deg')
//     }, 1000);
//  })
//  let mumbai = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('29 deg')
//     }, 3000);
//  })
//  console.log("delhi wheather is fecthing please wait ...")
//  let delhiw = await delhi
//  console.log(delhiw)
//  console.log("mumbai wheather is fecthing please wait ...")
//  let mumbaiw =await mumbai
//  console.log(mumbaiw)
// }

// let w =wheather()
// w.then((value)=>{
//     console.log(value)
// })

// Error handling

// try and catch 

// try{
//     console.log("nirmal")
// }
// catch(error){
//     console.log("error is there  " + error)
// }
// try{
//     console.log(nirmal)
// }
// catch(error){
//     console.log("error is there  " + error)
// }

// Error objects 
// try {
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if(age>150){
//         throw new ReferenceError("This is probably not possible")
//     }
// } catch (error) {
// console.log(error.name)
// console.log(error.message)
//     console.log(error.stack)
// }

// Finally
const fun=()=>{
try {
    console.log("nirmal fageria")
    console.log(nirmal)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("script fianlly running")
}
}

fun()
console.log("script crossed the fun function")