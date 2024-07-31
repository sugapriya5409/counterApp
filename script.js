const btndecrement = document.querySelector("#decrement")
const btnreset = document.querySelector("#reset")
const btnincrement = document.querySelector("#increment")
let curvalue=0
const maintitle = document.querySelector("#title")


btnincrement.addEventListener("click",()=>{
    curvalue++
    maintitle.textContent=curvalue

})
btndecrement.addEventListener("click",()=>{
    curvalue--
    maintitle.textContent=curvalue

})
btnreset.addEventListener("click",()=>{
    curvalue=0
    maintitle.textContent=curvalue

})