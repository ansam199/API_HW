//edit your code 
fetch('http://localhost:3000/user/ansam',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
//Post Request With Data
// const data = { 
//     name: 'Ansam',
// };
fetch('http://localhost:3000/user',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(
        {
           name: "Ansam",
       }),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})