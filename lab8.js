let color=["red","blue","yellow","orange"];
let count=0;
document.getElementsByClassName("change_color")[0].addEventListener("click",function(){
    document.querySelector("body").style.background=color[count];
    count=(count+1)%color.length;
});

document.getElementsByClassName("change_shape")[0].addEventListener("mouseover",function(){
    this.style.height="100px";
    this.style.width="100px";
    this.style.background="black";
    this.textContent="Wow!";
});

document.getElementsByClassName("change_shape")[0].addEventListener("mouseout",function(){
    this.style.width="100%";
    this.style.height="50px";
    this.style.background="rgb(155, 130, 247)"
    this.textContent="Hover to make square and change color";
});





var clicked=true;
document.getElementsByClassName("change_Text")[0].addEventListener("click",function(){
    if(clicked){
        this.textContent= "Text Changed";
        
    }
    else{
        this.textContent = "Click To Change Text";
    }
        clicked= !clicked;

});


