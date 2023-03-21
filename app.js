let count = 0;
let countElement = document.getElementById("count-el");
let saveEntries = document.getElementById("entries"); 
function increment(){
    count++;
    countElement.textContent = count;
}
function reset(){
    countElement.textContent = 0;
    count = 0;
}
function save(){
    entry = count + " - "
    saveEntries.textContent += entry;
    console.log(count)
}
