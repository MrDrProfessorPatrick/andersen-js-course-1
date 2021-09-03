const getUsers = url => fetch(url);

//console.log(getUsers('https://jsonplaceholder.typicode.com/users'))

async function foo(url){
    try{
    let responce = await getUsers(url);
    let users = await responce.json();
    console.log(users);
    let res = await users.map(el=>el.username);
    console.log(res)
    console.log(users)
    } catch(err){
        console.log(err)
    }

    
}

foo('https://jsonplaceholder.typicode.com/users');