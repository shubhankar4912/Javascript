
//stack(primitive) memory and heap(non primitive) memory
//in stack we get a copy and in heap we get reference

let name="Rahul kumar"
let name2=name
console.log(name);

name2="Shravan kumar"
console.log(name);
console.log(name2);
let member={
    email:"user@mail.com"
}
let member2=member
member2.email="user2@mail.com"
console.log(member.email);
console.log(member2.email);