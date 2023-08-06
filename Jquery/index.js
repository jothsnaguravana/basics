
// jquery("h1").addClass("in");

$("h1").addClass("in"); 
// , removeClass , hasClass are some of functions 

// $("h1").css("background-color" , "black");


$("h1").text("This is JOthsma");

// $("img").attr("src", "images/kick.png"); 

// document.querySelector("img").src = "images/kick.png"; 

// $("h1").click(function() {
//     $("h1").css("color" ,"purple");
// })

// $("button").click(function() {
//    setTimeout(function() {
//     $("h1").css("color" ,"purple");
//    } ,900);
// })

// document.addEventListener("keydown" ,function(e) {
//       document.querySelector("h1").innerHTML = e.key;
// } )

$("body").keypress(function(e) {
   $("h1").text(e.key);
})

$("h1").before("<button>New </button>") 

// before , prepend , append , after functions  

// $("button").remove(); 

// $("button").on("click" , function() {
//    $("h1").fadeToggle();
// })

// $("button").on("click" , function() {
//    $("h1").slideToggle();
// })

$("button").on("click" , function() {
   $("h1").slideUp().slideDown().animate({opacity : 0.5});
})