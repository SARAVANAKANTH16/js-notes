function test(){
    let name=document.getElementById('name');
    let data =name.value;
    let count= data.length;
    if(count<=3){
        name.classList.add('input-danger');
        name.classList.remove('input-success')
        let data=document.getElementById('data');
        data.innerText='Enter the atleast 4 char';
        data.style.color='red';
    }
    else{
        name.classList.add('input-success');
        name.classList.remove('input-danger');
        let data=document.getElementById('data');
        data.innerText='Good to go';
        data.style.color='green';
    }
}