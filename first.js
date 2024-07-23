console.log('Welcome to JS course');
console.log("I love JS");

// variable
myname = "Sabeeh";
console.log(myname);
// _firstname = "Sabeeh CH";
// console.log(_firstname);

const age = 24;
console.log(age);

let x = null;
console.log(x);
// to check data type we use typeof --
console.log(typeof x);

let a = BigInt(123);
console.log(a);
let b = Symbol("Hello");
console.log(b);



// object
/*

const student = {
    fullName: "Muhammad Sabeeh",
    age: 27,
    cgpa: 3.59,
    isPass: true
}
console.log(student);
*/

//How to change values of any object keys
// access object key and value then update

/*console.log(student['age']);
student['age'] = student['age'] + 1;
console.log(student['age']);

student['fullName'] = "Muhammad Sabeeh Safdar";
console.log(student['fullName']);
console.log(student.fullName);
console.log(student.age);*/




// create a new object for a product (Keys: prodName, rating, offer, price)


/*
const product = {
    prodName : "Bel Pen",
    rating: 4,
    offer: true,
    price: 270

}
console.log(product);
console.log(product.prodName); */



/*
create an object called profile and stored values (Name, posts,follower, following, bio)
*/

// const profile = {
//     profName: "Mr. Sabeeh",
//     posts: 100,
//     follwers: 1000,
//     following: 4, 
//     bio: "Freelancer, Software Engineer, Pet Lover"
// }
// // console.log(profile);
// console.log(profile.following)



// let val = '123' + 1;
// console.log(val);
const stud = {
    firstName: "Sabeeh",
    age: 26,
    contactNumber: 03061326394,
    isMarried: false,
}
console.log(stud['firstName']);
console.log(stud.isMarried);
