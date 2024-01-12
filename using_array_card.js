let url = "https://date.nager.at/api/v3/PublicHolidays/2023/AT"
let response = fetch(url)
 response.then((v)=>{
    return v.json()
 }).then((contest)=>{
    console.log(contest)
    ihtml =""
    for(item in contest){
        console.log(contest[item])
ihtml += `
<div class="card " style="width: 18rem ;">
<img src="https://www.shutterstock.com/image-vector/world-mapcountries-600nw-231504040.jpg" class="card-img-top" alt="https://w0.peakpx.com/wallpaper/131/30/HD-wallpaper-4-seasons-world-3d-seasons-blue.jpg">
<div class="card-body">
  <h5 class="card-title">${contest[item].name}</h5>
  <p class="card-text">LocalName is <b>${contest[item].localName}</b></p>
  <P > Date = ${contest[item].date}</p>
  <P > Launch Year = ${contest[item].launchYear}</p>
  <a href="#" class="btn btn-primary">Visit Here</a>
</div>
</div>
`
cardContainer.innerHTML = ihtml
    }
 })

 // Hackerman question

 let a =[
   'Initializing Hack toolbar ...',
   ' Connecting to Facebook ...',
   'Connecting to sever1 ...',
   'Connection failed. Retrying ...',
   'Connecting to sever 2 ...',
   "Connected successfully ...",
   'Trying to fetch Usernsme ...',
   'Username is nirmalfageria15',
   "Trying 200k passwords ...",
   'Passoward found ...',
   'Hacked Successfully'

 ]
const sleep =async(seconds)=>{
 return new Promise ((resolve,reject)=>{
   setTimeout(() => {
      resolve(true)
   }, seconds *1000);
 })
}

 const showHack =async (message)=>{
await sleep(2)
hackerman.innerHTML = hackerman.innerHTML + message +'<br>'
 }
 (async() =>{
for(let i=0;i<a.length;i++){
   await showHack(a[i])
}
 })()

