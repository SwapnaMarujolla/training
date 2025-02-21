// EVEN OR ODD 

showNumber(10);

function showNumber(n){
    for (let i=0;i<=n;i++){
        if(i % 2 == 0)
            console.log(i, 'Even');
        else console.log(i,'Odd');
    }
}