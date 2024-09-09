const accountId = 14355
let accountEmail ="lrt@goggle.com"
var accontPassword ="12345"
accountCity= "jaipur"
let accountState //show undefined

// accountId =2 //not allowed
accountEmail ="jhhjp@.com"
accountCity ="pune"

console.log(accountId);

/*
perfer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accontPassword, accountCity, accountState])