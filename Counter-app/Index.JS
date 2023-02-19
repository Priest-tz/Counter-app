let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")
console.log(saveEl)
console.log(countEl)

function increment() {
  count += 1 
  countEl.textContent = count
}

let decount = 0

function decrement() {
  count -= 1 
  countEl.textContent = count
}
 
function save(){
let countStr = count + "-"
saveEl.textContent += countStr
countEl.textContent = 0
count = 0
}





