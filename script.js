const container=document.getElementById("container")
const equal=document.getElementById("equal")
const sonucInput=document.getElementById("sonucInput")
const AC=document.getElementById("AC")
const yuzde=document.getElementById("yuzde")
const isaret=document.getElementById("isaret")
let num=[]


container.addEventListener(("click"), (e)=>{


    if(e.target.id=="equal" || e.target.id=="yuzde" || e.target.id=="AC"|| e.target.id=="carpma" || e.target.id=="isaret"){}

    else{
        num.push(e.target.innerText)
        num1= num.join("")
        console.log(num1);
        localStorage.setItem("num1", num1)
        sonucInput.innerText=`${num1}`
        sonucInput.value+=`${e.target.innerText}`

}

})

equal.addEventListener("click",()=>{
    num=localStorage.getItem("num1")
    result = eval(num)
    sonucInput.value=`${result}`

})



AC.addEventListener("click",()=>{
    location.reload()
    sonucInput.value=" "
    localStorage.clear()
})


yuzde.addEventListener("click",()=>{
    sonucInput.value= sonucInput.value/100
})

carpma.addEventListener("click",()=>{
    num.push("*")
    sonucInput.value=sonucInput.value+"x"

})

isaret.addEventListener("click",()=>{

    sonucInput.value= sonucInput.value*(-1)
})