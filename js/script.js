const container=document.getElementById('container')
const colors=['#FF0000','#FF5100','#FFC300','#F7FF00','#9EFF00','#32FF00','#07F686','#07D9F6','#0837E5','#620AD8','#D80AD5 ','#F10A81','#5A0505','#DAF7A6' ]
const squares=2175

for(let i=0;i<squares;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=> setColor(square))
    square.addEventListener('mouseout',()=> removeColor(square))
    container.appendChild(square)
}
function setColor(element){
    const color=getRandomColor()
    element.style.background=color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.background= '#1d1d1d'
    element.style.boxShadow= '0 0 2px #000'
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}