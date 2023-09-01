for(var i =0;i<7;i++){                //checks which drum is clicked and applies function drumClick on it.
    document.querySelectorAll(".drum")[i].addEventListener("click" , drumClick);
}

function drumClick(){
    
    var buttonInnerHtml = this.innerHTML;              //html of the drum selected is passed to variable buttonInnerHTML
    makeSound(buttonInnerHtml);                           

    buttonAnimation(buttonInnerHtml);

}

document.addEventListener("keydown" , keypressed);      //checks for the key pressed on keyboard and then applies function named keypressed on it 
function keypressed (event) {
    makeSound(event.key);                             //checks for which specific key is pressed and then passed to function makeSound

    buttonAnimation(event.key);
}

function makeSound(key){
    switch(key){
        case "w" :
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "a" :
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "s" :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "d" :
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "j" :
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "k" :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "l" :
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        default: alert(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);             //  we have given class of key to each drum like w key for w drum and so on so..
                                                                        //here .(key which is pressed) that class is selected and assigned to variable activeButton
    
    activeButton.classList.add("pressed"); 

    setTimeout(function(){activeButton.classList.remove("pressed")},150);
}