// CREATING AN ADDRESSS OBJECT
const address = {
    streest: 'a',
    city:'b',
    zipcode:'c'
};

function showAddress(address){
    for(let key in address){
        console.log(key,address[key])

    }

}
showAddress(address);