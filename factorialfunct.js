function fact(num){  // function to calculate factorial
    let result = 1; //  initialize result to 1
    for(let i = 1; i<=num; i++){ //i valuve is 1, then i count total no num of time if i call 5 then it count 5 time only, i++ increment that no

        result =result*i; //its calculate the result 1*1=1, 1*2=2, 2*3=6, 2*3*4=24
        // console.log(i);
    }
    return result;

}
console.log(fact(4)); 



// another way to solve
function calfact(inpnum){
    if(inpnum ==0 || inpnum==1){
    // 5 == 0 (f) or  5 == 1 (t)
        return 1;
}
return inpnum*calfact(inpnum - 1);
//    5 * 4 = 20 (5-5=4)
//    20 * 3 = 60
    // 60 * 2 =120
}
console.log("this is another way to find factorial",calfact(5));