const bcrypt = require('bcryptjs');
const password = 'password';
const myHash = '$lgvjbjpbgigighuitujgfju';
bcrypt.compare(password,myHash,function(err,res){
    if(res === true){
        console.log('password match!');
    }else{
        console.log('mismatch password please try again!!!');
    }
});