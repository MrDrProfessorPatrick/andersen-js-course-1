function createCB(str){
    function inner (){
       console.log(str) ;
   };
   return inner
}

function foo(x, cb){
    if(x>10){
    console.log('x>10');
        cb();
        return
    }
        console.log("x<10")
    }

  
  foo(5, createCB('cb'));
  foo(20, createCB('cb'));