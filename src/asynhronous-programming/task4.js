function getUserData(src){
     return fetch(src)
        .then(response=>response.json())
        .then((user)=>{
         if(user){
            fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
            .then(responce => responce.json())
            .then(console.log)
        }
        
    })
    
}

getUserData('http://www.json-generator.com/api/json/get/cfQCylRjuG');