const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(buttons){
    buttons.addEventListener('click',(e) =>{
        if(e.target.id == 'gray'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == 'skyblue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == 'orange'){
            body.style.backgroundColor = e.target.id;
        }
    })
})