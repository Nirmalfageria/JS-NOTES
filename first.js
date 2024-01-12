console.log("NIRMAL FAGERIA kd");
const product ={
    title:"Ball Pen",
    price:300,
    rating:4,
    isture:1,
    offer:'30%' }
    console.log(product);
let a=3 ,b= 4;
console.log("a+b = ",a+b);
// let name1 =prompt("Hello");
// console.log(name1);
let output=`The name of item is ${product.title} price is ${product.price} reting is ${product.rating} and offer is ${product.offer}`;
console.log(output);
let newOutput=output.toUpperCase();
console.log(newOutput);
let arr =[1,2,3,4,5,6,7];
//adding a number
arr.splice(2,0,1);console.log(arr);
//delete a number
arr.splice(3,1);
console.log(arr);
//replace a  number
arr.splice(4,1,102);
console.log(arr);  
arr.splice(3);
console.log(arr); 
