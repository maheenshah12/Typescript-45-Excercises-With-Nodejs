//array of current users
let current_users = ['usman','aiman','ali','hani','areeba'];
//array of new users
let new_users = ['maheen','arbeen','Areeba','Hani','asim']

//loop through new_users to check for usersname avaibility
new_users.forEach(new_one_user => {  
   //making a condition for username already exist and save in
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

////print different messages using if - statement
    if(our_condition){
  console.log(`sorry ${new_one_user} is already taken`)
    }else{
        console.log(`this username ${new_one_user} is availble`)
    
    }
});