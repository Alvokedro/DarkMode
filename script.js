const switchEl = document.getElementById("switch");
switchEl.addEventListener("click",() =>{
    if(switchEl.checked === true){
        document.body.style.backgroundColor='black';
    }
    else{
        document.body.style.backgroundColor='white';

    }
});