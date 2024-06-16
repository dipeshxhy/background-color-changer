const button= document.querySelectorAll(".box")
const body=document.querySelector("body")
 button.forEach(element => {
    element.addEventListener("click",function(box){
        if(box.target.id==="box1"){
            body.style.backgroundColor="#FFB1B1"

        }
        if(box.target.id==="box2"){
            body.style.backgroundColor="#83B4FF"

        }
        if(box.target.id==="box3"){
            body.style.backgroundColor="#FFFDB5"

        }
        if(box.target.id==="box4"){
            body.style.backgroundColor="#C738BD"

        }
        if(box.target.id==="box5"){
            body.style.backgroundColor="#CAE6B2"

        }
    })
 });