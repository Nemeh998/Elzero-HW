let member={
    name:'nemh',
    age:'24',
    country:'jordan',
    fullDetails:function(){
        return` My Name Is ${member["name"]}, My Age Is ${member["age"]}, I Live in ${member["country"]}`
    }
}

// Create Your Object Here

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

