// creating a array
let userNames = ['maheen','areeba','hani','admin','aiman'];

// using foreach loop on array
userNames.forEach(oneUser => {
    if(oneUser === 'admin'){
         console.log(`hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again.`)
    }
})
