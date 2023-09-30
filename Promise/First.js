//  //creation of promise
//  const promiseOne= new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography,network
//     setTimeout(function(){
//         console.log("Async task is done")
//         resolve( )
//     },1000)
//  })  
//  promiseOne.then(function(){
//     console.log("promise consumed")
//  })
//  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2')
//         resolve()
//     },1000)
//  }).then(function(){
//     console.log('task 2 consumed')
//  })
//  const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@example.com"})
//     })
//  })
//  promiseThree.then(function( user){
//   console.log(user);
//  })
 const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({
                username:"Shubhankar",
                email:"shubh@gmail.com"
            })
        }
        else{
            reject('Error:something went wrong')
        }
    },1000)
 })
 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username
 })
 .then((username)=>{
console.log(username);
 })
 .catch((error)=>{
    console.log(error);
 }).finally(()=> console.log("the is resolved or rejected"))
 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true

        if(!error){
            resolve({
                username:"javasript",
                passd:"123"
            })
        }
        else{
            reject('Error:js went wrong')
        }

    },1000)
 })

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
  
}
consumePromiseFive() 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})