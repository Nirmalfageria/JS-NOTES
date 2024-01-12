const loadScript =(src)=>{
    return new Promise((resolve,reject)=>{
    let script = document.createElement('script')
    script.src =src
    script.onload=()=>{ 
resolve(src + "Done successfully")
    }})

    document.head.append(script)
}

// question 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
// console.log(value)
// }).catch((error)=>{
//     console.log(error)  
// })

// question 2 

const main2 = async()=>{
// console.log(new Date().getMilliseconds)
let a2 = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
console.log(a2)
// console.log(new Date().getMilliseconds)
}
main2()

