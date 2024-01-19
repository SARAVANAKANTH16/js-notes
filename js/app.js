


















/*let users=['yash','nayan', 'kunal', 'mayank', 'ridhi']

console.log(users)*/

/*users.forEach(function(abc){
    console.log(abc)
})

num=[1,2,3,4,5]
let demo = num.forEach((n)=>{
    return n*n
})

console.log(demo)

let d= num.map((n)=>{
    return n*n
})

console.log(d)

const users = [
    {
        firstName: "Arjun",
        lastName: "Singh",
        age: 25,
        salary: 45000,
        gender: "Male",
        email: "arjun.singh@example.com",
      },
      {
        firstName: "Dia",
        lastName: "Verma",
        age: 29,
        salary: 55000,
        gender: "Female",
        email: "dia.verma@example.com",
      },
      {
        firstName: "Rohan",
        lastName: "Gupta",
        age: 27,
        salary: 48000,
        gender: "Male",
        email: "rohan.gupta@example.com",
      },
      {
        firstName: "Ishita",
        lastName: "Joshi",
        age: 31,
        salary: 62000,
        gender: "Female",
        email: "ishita.joshi@example.com",
      },
      {
        firstName: "Aniket",
        lastName: "Kumar",
        age: 30,
        salary: 58000,
        gender: "Male",
        email: "aniket.kumar@example.com",
      },
      {
        firstName: "Pooja",
        lastName: "Malhotra",
        age: 26,
        salary: 52000,
        gender: "Female",
        email: "pooja.malhotra@example.com",
      },
      {
        firstName: "Vivek",
        lastName: "Rajput",
        age: 33,
        salary: 65000,
        gender: "Male",
        email: "vivek.rajput@example.com",
      },
      {
        firstName: "Kavya",
        lastName: "Shah",
        age: 28,
        salary: 53000,
        gender: "Female",
        email: "kavya.shah@example.com",
      },
      {
        firstName: "Aarav",
        lastName: "Sharma",
        age: 28,
        salary: 50000,
        gender: "Male",
        email: "aarav.sharma@example.com",
      },
      {
        firstName: "Aanya",
        lastName: "Patel",
        age: 32,
        salary: 60000,
        gender: "Female",
        email: "aanya.patel@example.com",
      },
];

users.map((n)=>{
    console.log(n.firstName)
})

let tax = users.map((n)=>{
    if(n.filtersalary<60000){
        return{
            name:n.firstName,
            salary:n.salary,
            tax:n.salary*.1,
        }
    }
    else{
        return{
            name:n.firstName,
            salary:n.salary,
            tax:n.salary*.2,

        }
    }
})

tax.filter((n)=>{
    if(n.salary>40000 && n.name=='Arjun' ){
        console.log(n)
    }
})*/

var age=prompt("Enter the age");
age=Number(age);
if(isNaN(age)){
    console.log("Input is not a number")
} else {
    if(age<18){
        console.log("Too young")
    }
    else{
        console.log("Old enough")
    }
}

/*var userInput = prompt("Enter something");

console.log("YOU ENTERED: "+userInput)
*/
