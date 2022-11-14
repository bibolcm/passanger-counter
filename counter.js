
let countEl = document.getElementById('count-el')
let previousEntries = document.getElementById('previous-entries')
let totalEl = document.getElementById('total-entries');

let count = 0;
let totalCount = 0;

function increment() {
    
    count += 1;
    countEl.innerText = count
}

function save(){

    let countStr =' - ' + count ;
    previousEntries.textContent += countStr;

    totalCount = totalCount + count;
    totalEl.textContent = totalCount;

    countEl.innerText = 0;
    count = 0;
}

function reset(){
    previousEntries.textContent = null;
    totalEl.textContent = null;
    totalCount = 0;
}

