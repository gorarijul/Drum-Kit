for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    playDrum(this.innerHTML)
    buttonAnimation(this.innerHTML);
  });
  // there is no parantheses at the end because with a parantheses the function will be called just as an event listener is created.
  // function is passed as an input to be called later on
}

document.addEventListener("keydown",function(){
  playDrum(event.key);
  buttonAnimation(event.key);
});

function playDrum(val) {
  switch (val) {
    case "w":

      var playSound = new Audio("sounds/tom-1.mp3");
      playSound.play();
      break;

    case "a":

      var playSound = new Audio("sounds/tom-2.mp3");
      playSound.play();
      break;

    case "s":

      var playSound = new Audio("sounds/tom-3.mp3");
      playSound.play();
      break;
    case "d":

      var playSound = new Audio("sounds/tom-4.mp3");
      playSound.play();
      break;
    case "j":

      var playSound = new Audio("sounds/snare.mp3");
      playSound.play();
      break;

    case "k":

      var playSound = new Audio("sounds/crash.mp3");
      playSound.play();
      break;

    case "l":

      var playSound = new Audio("sounds/kick-bass.mp3");
      playSound.play();
      break;
    default:console.log(innerHTML);

  }
}

function buttonAnimation(pressedDrum){
  document.querySelector("."+pressedDrum).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+pressedDrum).classList.remove("pressed");},100);
}
