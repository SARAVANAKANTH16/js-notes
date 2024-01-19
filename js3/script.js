//promise


//API'S
//FETCH

fetchQuote=()=>{
    fetch("https://type.fit/api/quote").then((data)=>{
        console.log('data fetched from the url')
        return data.json();
    })
    .then((data)=>{
        let random =Math.floor(Math.random()*data.length);
        document.getElementById('quote').innerText=data[random].text;
        document.getElementById('author').innerText=data[random].author;
    })
}

fetchQuote()





















/*
setTimeout(()=>{
    console.log('download complete')
},5000)

console.log('notification send')

const demoPromise = new Promise((resolve,reject)=>{
    let status = false
    setTimeout(()=>{
        if(status == true){
            console.log('download completed')
            resolve('promise resolve time')
        }
        else{
            reject('download failed')
        }

    },3000)
})

demoPromise.then((data)=>{
    console.log('notification send')
}).then((error)=>{
    console.log('rejected :',error)
})*/