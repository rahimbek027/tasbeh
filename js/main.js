
let son= document.querySelector(".son");
let offset=0
function inc(){
offset++
son.innerHTML=offset
}
function dec(){
  if (offset> 0) {
    offset--
    son.innerHTML=offset
    
  }

}
function rest(){
  offset=0
  son.innerHTML=offset
}