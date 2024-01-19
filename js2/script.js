/*
let btns = document.querySelectorAll('.btn')

btns.forEach((btn)=>{
    btn.addEventListener('click ',()=>{
        console.log(e.target.innerText)
    })
})*/

let title = document.querySelector('h3')
title.addEventListener('click',(e)=>{
    console.log('heading is being clicked')
})

let foodItems = document.querySelectorAll('.card')
foodItems.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log(e.title,e.price)
    })
})