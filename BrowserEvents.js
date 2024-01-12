// let x = function(e){
//     console.log(e)
//     alert("Hey NIRMAL")
// }
// let y =function(e){
//     alert("Hey Fageria")
// }
// let btn = document.getElementById("btn")
// btn.addEventListener('click' , x) 
// btn.addEventListener('click' , y) 

// let b= prompt("Enter your fav number")
// if(b!=="2"){
// btn.removeEventListener("click", y)
// }
setInterval(function(){
    document.querySelector("#blub").classList.toggle("blubred")
} , 5000)

// callbacks

// function loadScript(src,callback){
//     let script = document.createElement('script')
//     script.src =src;
//     script.onload=function(){
//         console.log("script is loaded "+src)
//         callback(src);

//     }
//     document.body.appendChild(script)
// }

// function hello(src){
//     alert("Hello everyone  "+src)
// }
// function bye(){
//     alert("Bye everyone  ")
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)

// Handling error

function loadScript(src,callback){
    let script = document.createElement('script')
    script.src =src;
    script.onload=function(){
        console.log("script is loaded "+src)
        callback(null,src);

    }
    script.onerror = function(){
        console.log("script got some error")
        callback(new Error)
    }
    document.body.appendChild(script)
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Hello everyone"+src)
}
function bye(){
    alert("Bye everyone")
}
loadScript("https://cdn.jsdelivr.net/nwpm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)