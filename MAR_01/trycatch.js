try{
    const a = 2;
    console.log(a);
    throw new Error({
        name:"custom error",
    })

}catch(error) {
    console.log('catch');
    console.log(error);
}
finally{
    console.log('hey sorry');
}
