const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const colortext1 = document.getElementById("color1")
const wrap =  document.getElementById("wrap")
const box = document.getElementById("box")
const box1 = document.getElementById("box1")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
// const hex2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'c', 'd', 'b', 'E', 'F']
btn.addEventListener('click',function(){
 
        let hexColor = '#'
        let hexColor1= '#'
        for(let i=1;i<=6;i++){
            hexColor += randHexValue()
            hexColor1 += randHexValue1()
        }
        box.style.backgroundColor = hexColor
        colortext.innerHTML = hexColor
        box1.style.backgroundColor = hexColor1
        colortext1.innerHTML = hexColor1  
})

function randHexValue(){
   let randomIndex = Math.floor(Math.random()*16)
   return hex[randomIndex]
}
function randHexValue1(){
    let randomIndex1 = Math.floor(Math.random()*16)
    return hex[randomIndex1]
 }