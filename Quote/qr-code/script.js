function generateQR(){
    let imgBox = document.getElementById('imgBox');
    let qrImage= document.getElementById('qrImage');
    let qrText = document.getElementById('qrText');
    if(qrText.value.length > 0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+qrText.value;
        imgBox.classList.add("show-img")
        setTimeout(()=>{
            qrText.classList.remove("show-img")
        },2000)
    }else{
        imgBox.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}