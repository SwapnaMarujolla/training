
const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved1");   
    },2000)
});
const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved2");   
    },5000)
});


async function handlePromise() {
    console.log("hello world");
    // here th js will wait until the promise resolves and the it enters the next line till then everything will be on hold
    const value1 = await promise1;// value will contain the value of this promise i.e, resolved promise which is "Promise resolve"
    console.log(value1);//this ia a promise resolved value.
    console.log("JavaScript1");

    const value2 = await promise2;
    console.log(value2);// This got resolved in 5 sec but was waiting for 10 sec's to grt the upper one to be resolved first.
    console.log("JavaScript2");
}
handlePromise()


async function callwithAwait(){
    
    // this response object has a body that has a readable stream.
      const response =  await fetch('https://dog.ceo/api/breeds/image/random') 
      const apiresponse = await response.json();//.json converts to the readable stream i.e,it converts that response body to json.
      console.log(apiresponse);
}
callwithAwait();


    // //here js will not wait for the js to be resolved.
    // promise.then(function(value){
    //     console.log(value);
    // });
    //     console.log('Javascript');//this will print immediately before resolving.
    // // };

