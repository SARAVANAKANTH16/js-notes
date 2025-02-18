let users=[]
let userContainer = document.getElementById('users')
let na=document.getElementById('na');
let email=document.getElementById('email');


function eye(){
    if(na.type=="text"){
        na.type="password";
    }
    else{
        na.type="text";
    }
}

let container = document.getElementById("icon");
let count=0;
icon.onclick =function(){
    document.body.classList.toggle("dark-theme");
    if(count%2==0){
        icon.classList.remove("fa-solid","fa-sun");
    icon.classList.add("fa-regular","fa-moon");
    }
    else{
        icon.classList.remove("fa-regular","fa-moon")
        icon.classList.add("fa-solid","fa-sun");
    }
    count+=1;
}

function eye1(){
    if(email.type=="text"){
        email.type="password";
    }
    else{
        email.type="text";
    }
}
function addUser() {
    

    let tempUser = {
        name: na.value,
        email: email.value,
    }

    let userCount = checkIfUserExist(email.value);
    if(userCount.length==0){
        users.push(tempUser);
    }
    else{
        alert('user already exist');
    }
    na.value="";
    email.value="";
    renderUsers();


}

function checkIfUserExist(email){
    let userCount=users.filter((user)=>{
        return user.email==email;
    })
    return userCount;
}

function renderUsers(){
    userContainer.innerHTML=''
    users.map((user)=>{
        let card=document.createElement('div');
        let na=document.createElement('p');
        let email=document.createElement('p');
        card.classList.add('card');
        na.innerText = user.na;
        email.innerText = user.email;
        userContainer.appendChild(card);
        card.appendChild(na);
        card.appendChild(email);
    })
}

function validatename(){
    if(na.value.length==0){
        naerror.innerHTML = 'name is required';
        return false;
    }
    if(!na.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        naerror.innerHTML = 'write full name';
        return false;
    }
    naerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateemail(){
    if(email.value.length==0){
        emailerror.innerHTML='Email is required'
        return false;
    }
    
    emailerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
