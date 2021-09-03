function gerResolvedPromise(value){
    return Promise.resolve(value)
}

gerResolvedPromise(500).then(response => {
    if(response > 300) throw new Error('Error')
})
.catch((err)=>console.log(err.message))
.finally(()=>{console.log('Finally')})

