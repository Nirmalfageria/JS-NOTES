// // prototype

// let a ={
//     name:"nirmal",
//   id:"first",
//  run:()=>{
     
// alert("self run")}
// }
// let p ={
//     class:"second",
//     run :()=>{
//         alert("run")
//     }
// }
// a.__proto__=p
// // a.run()
// p.__proto__={
//     name2:"fageria"
// }
// console.log(a.name2)

// classes and objects

// class RailwayTicket {

//     submit(){
//         alert(this.name+": your form is submitted ,Train no is :" + this.trainno)
//     }
//     cancel(){
//         alert(this.name +": your ticket is cancelled of Train no :" + this.trainno)
//     }
//     fill(givenname ,trainno){
//         this.name=givenname
//         this.trainno =trainno
//     }
// }
// let nirmalform = new RailwayTicket()
// nirmalform.fill('nirmal' ,'12458')
// let sumitform =new RailwayTicket()
// sumitform.fill('sumit','15364')
// nirmalform.submit()
// sumitform.submit()
// sumitform.cancel()

// constructor 

// class RailwayTicket {
// constructor(name,trainno,address){
//     this.name =name,
//     this.trainno = trainno,
//     this.address =address
// }
// preview(){
//     alert(this.name+": your ticket Train no is :" + this.trainno +" and your address is "+this.address)
// }
//     submit(){
//         alert(this.name+": your form is submitted ,Train no is :" + this.trainno+" and your address is "+this.address)
//     }
//     cancel(){
//         alert(this.name +": your ticket is cancelled of Train no :" + this.trainno+" and your address is "+this.address)
//         this.trainno=0 
//     }
    
// }
// let fageriaform = new RailwayTicket("fageria","125480","sikar")
// fageriaform.preview()
// fageriaform.submit()
// fageriaform.cancel()
// fageriaform.preview()

// Class Inheritance
// class animal{
//     constructor(name,color){
//         this.name=name,
//         this.color=color
//     }
//     shout(){
//         console.log(this.name + " is shouting")
//     }
//     run(){
//         console.log(this.name+" is running")
//     }
// }

// class monkey extends animal{
//     eat(){
// console.log(this.name +" is eating")
//     }
//     run(){
//         super.run()// this is for over write the run function 
//         console.log(`${this.name } running very fast`)
//     }
// }
 
// let ani = new animal ("barvo","white")
// let m = new monkey ("chimpu", "gray")
// ani.shout()
// m.run()
// m.eat()

// static methods

class animal {
    constructor(name){
        this.name= animal.capitalize(name) 
    }
    walk(){
        console.log(`${this.name} is walking`)
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+ name.substr(1,name.length)
    }
}

let ab = new animal("hari")
ab.walk()
// ab.capitalize() we cannot access this outside beacuse it is static a function 

// gatter and setter and instance of operator
ab.name ="Jack"
ab.walk()
console.log(ab instanceof animal)

// pratice questions

class complex{
    constructor(real ,imginary){
        this._real = real 
        this._imginary  =imginary
    }
    add(num){
        this._real=this._real + num.real
        this._imginary =this._imginary +num.imginary
    }
    get real (){
        return this._real
    }
    get imginary (){
        return this._imginary
    }
    set real(newReal){
        this._real = newReal
    }
    set imginary(newImginary){
        this._real = newImginary
    }
}

let a = new complex(2,9)
let b = new complex(3,2)
a.real = 10
a.imginary =3
a.add(b)
console.log(`${a.real}+${a.imginary}i`)