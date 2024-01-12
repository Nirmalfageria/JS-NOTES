//arrow function
let count =(str)=>{
    let count =0;
    for(let i=0;i<str.length;i++){
 if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
     count++;
 }
    }
    return count;
}
// forEach function
let array =[20,4,3,23,432,132,312];
let sum=0;
array.forEach( val =>{
sum =val +sum;
return sum;
}
)
console.log(sum, "forEach");

// map
let newArray = array.map(val =>{
    return val/2;
});
console.log(newArray);
//filter
let evenArray = array.filter( val=>{
    return val%2===0;
})
console.log(evenArray);
//reduce
let mean =0;
let meanArray= array.reduce( (prev ,curr)=>{
   mean =prev +curr ;
return mean/2; })
    console.log(meanArray);


    //console section
    console.log(console);
    console.table(console);
    console.error("Hey this is an error");
    console.warn("Hey this is an warning");
    console.info("This is an another type of info");
    console.time('forloop')
    for(let i=0;i<3;i++){
        console.log("Hey");
    }
    console.timeEnd('forloop');
    // prompt
    prompt("Hey enter a number", "15");