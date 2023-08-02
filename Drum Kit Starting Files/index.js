
for(let i=0 ; i < 7 ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mouseover",function() {
        let $ = document.querySelectorAll(".drum")[i].innerHTML ;
        makeSound($);
      }
    );
}

document.addEventListener("keydown" , function(e) {
                        makeSound(e.key);
                    })

document.getElementById("title").addEventListener("click" ,function (e) {console.log(e)}) ;

function makeSound(x) {
  makeAnimation(x);
  switch (x) {
    case "w":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      break;
   }
}

function makeAnimation(x) {
  document.querySelector("."+x).classList.add("pressed");
  // classes.push("pressed");

  setTimeout(function() {
    document.querySelector("."+x).classList.remove("pressed");
  } ,500);
  // after 5 secs , the function will be executed 
}




















// const drums = document.querySelectorAll(".drum");

//  drums.forEach(drum => {
//                           drum.addEventListener("click", function() {
//                                       // let audio = new Audio('sounds/tom-4.mp3');
//                                       // audio.play();
//                                       alert("clicked");
//                                       console.log(this.innerHTML);
//                                       this.style.color = 'black';
//                                     }
//                                 );
//                         }
//               );
// // }
