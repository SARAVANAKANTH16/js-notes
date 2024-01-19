
function cardMouseIn(){
    console.log('mouse in the card')
}

function cardMouseOut(){
    console.log('mouse is not there in the card')
}

function cardClicked(){
    console.log('card is clicked')
}

function test(){
    let name = document.getElementById('name');
    let data=name.value;
    let count=data.length;
    if(count<=3){
        name.classList.add('input-danger');
        name.classList.remove('input-success');
        let data=document.getElementById('data')
        data.innerText = 'Enter the atleast 4 char';
        data.style.color= 'red';
    }
    else{
        name.classList.add('input-success');
        name.classList.remove('input-danger');
        let data=document.getElementById('data')
        data.innerText= 'Good to Go!';
        data.style.color='green';
    }

}






































/*function grinder(items){
    console.log('grinding ...',items)
}

grinder('tomato')
grinder('mangoes')

function add(a,b){
    console.log(a+b)
}
add(34,56)
add(11,12)
add(45,67)



function cube(n){
    console.log(n*n*n)
}

cube(3)
cube(2)

arrowDemo = () =>{
    console.log('arrow function')
}

arrowDemo()

sqr = (n) =>{
    console.log(n*n)
}

sqr(3)*/
