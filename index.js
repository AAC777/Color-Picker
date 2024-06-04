const cardList = document.querySelector('.cardList');
const score = document.querySelector('h2');
buildBoard();
let interval = setInterval(function(){
    addCard(cardList.children.length + 1) //make it start at 1 not 0
}, 2000);
cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){

        value += 1
        score.textContent=`Score: ${value}`
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    } else{

        value += 2
        score.textContent=`Score: ${value}`
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        score.textContent=`You Got: ${value}`
        img.src="data:image/png;base64,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"
    }

});

let value = 0;
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}
function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}


