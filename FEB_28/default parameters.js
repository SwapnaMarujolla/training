function interest(principle,rate = 3.5,years = 5){
    return principle*rate/100*years;
}
console.log(interest(10000));
//if we set a default value to a parameter all the parameters after that should have a default value.
//if we do not set a value to years it will return NaN as a result.
