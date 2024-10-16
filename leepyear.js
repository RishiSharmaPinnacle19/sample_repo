 function leepyear(year){
    if(year % 4 === 0){
    //4   
        console.log("its a leep year");
    }
    else 
    {
        console.log("not");
    }
 }
 leepyear(2021);

 //
 function ly(year){
    if(year % 4 === 0){
        return true;
    }
    
      return  false;
    
 }

 console.log(ly(2021));