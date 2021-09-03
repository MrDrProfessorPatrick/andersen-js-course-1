const asyncBar = async () =>'Some string!!'

async function foo(){
    let res = await asyncBar();
    console.log(res)
}

foo()