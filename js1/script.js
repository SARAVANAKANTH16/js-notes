
let users=[]

function AddUser(){
    let name =document.getElementById('name')
    let email=document.getElementById('email')

    let city = ['Mumbai',
        'Delhi',
        'Bangalore',
        'Hyderabad',
        'Chennai',
        'Kolkata',
        'Ahmedabad',
        'Pune',
        'Jaipur',
        'Lucknow']
    var rescity =Math.floor(Math.random()*city.length)
    console.log(city[rescity])

    let ifUsersExist = users.filter((data)=>{
        console.log(data.email == email.value)
        return data.email == email.value;
    })

    let user = {
        name:name.value,
        email:email.value,
        city:city[rescity]
    }

    if(ifUsersExist.length == 0 ){
        users.push(user)
    }
    else{
        alert('email exist ')
    }

    /*users.map((data)=>{
        var result= document.getElementById('result')
        result.innerText=JSON.stringify(data);
    })*/

    var result= document.getElementById('result')
    result.innerText=JSON.stringify(users)


    


}