let target = document.querySelectorAll(".drum");

for (let i = 0; i < target.length; i++) {

  target[i].addEventListener("click", function() {

    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);


  });
}

document.addEventListener("keypress", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);

});




function playSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;

    case "j":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;

    case "k":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      break;

    case "l":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;

    default:
      console.log(this.innerHTML)
      break;
  }
}

function buttonAnimation(keyButton) {

  var activeButton = document.querySelector("." + keyButton);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
